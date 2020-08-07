import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { ApiService } from 'src/app/http.service';
import { AssessmentServiceService } from '../assessment-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-careneeds',
  templateUrl: './careneeds.page.html',
  styleUrls: ['./careneeds.page.scss'],
})
export class CareneedsPage implements OnInit {

    careneedinfo;
    careCircleId;
    userId;
    formValid = false;
    formReady = false;
    careNeedsForm: FormGroup;

    constructor(private dataService: DataserviceService,
                private apiService: ApiService,
                private assessmentService: AssessmentServiceService,
                private navCtrl: NavController) {}

    ngOnInit() {
    }

    async ionViewWillEnter(){
        this.careCircleId = await this.assessmentService.getCareCircleId();
        this.userId = await this.dataService.getUserInfo();
        this.userId = this.userId.userId;
        this.careNeedsForm = new FormGroup({});
        this.careneedinfo = [];
        const data: any = await this.apiService.get('assessment', {careCircleId : this.careCircleId, userId : this.userId });
        if (data.assessmentValues.CARE_NEED_PREFS == null){
            data.assessmentConfiguration.CARE_NEED_PREFS.options.forEach(item => {
                this.careNeedsForm.addControl(item.key, new FormControl('', [Validators.required]));
                this.careneedinfo.push({
                    name : item.label,
                    value : item.key,
                    val : ''
                });
            });
        }else{
            data.assessmentConfiguration.CARE_NEED_PREFS.options.forEach(item => {
                this.careNeedsForm.addControl(item.key, new FormControl(data.assessmentValues.CARE_NEED_PREFS[item.key], [Validators.required]));
                this.careneedinfo.push({
                    name : item.label,
                    value : item.key,
                    val : data.assessmentValues.CARE_NEED_PREFS[item.key]
                });
            });
        }
        await this.assessmentService.setAssessmentStateObject(data);
        this.formReady = true;
    }

    async save(){
        this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEED_PREFS', this.userId, this.careNeedsForm.value).then((response) => {
            this.navCtrl.navigateForward(['/assessment/assessmentbar']);
        });
    }
    checkOptions(){
        console.log(this.careneedinfo);
    }
    back(){
        this.navCtrl.navigateBack(['/carecircle/list']);
    }
}
