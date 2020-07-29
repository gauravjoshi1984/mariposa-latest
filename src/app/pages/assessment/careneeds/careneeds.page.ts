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
    public changecolor = 'assets/icon/radioButtonUnchecked.png';

    onClick(){
        if (this.changecolor === 'assets/icon/radioButtonUnchecked.png')
        {
            this.changecolor = 'assets/icon/radioButtonChecked.png';
        }
        else{
            this.changecolor = 'assets/icon/radioButtonUnchecked.png';
        }
    }
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
        const data: any = await this.apiService.get('assessment', {careCircleId : this.careCircleId, userId : this.userId });
        if (data.assessmentValues.CARE_NEED_PREFS == null){
            this.careneedinfo = data.assessmentConfiguration.CARE_NEED_PREFS.options.map((item: any) => {
                return {
                    name : item.label,
                    value : item.key,
                    val : ''
                };
            });
        }else{
            const metadata = data.assessmentConfiguration.CARE_NEED_PREFS.options;
            this.careneedinfo = data.assessmentConfiguration.CARE_NEED_PREFS.options.map((item: any) => {
                return {
                    name: item.label,
                    value: item.key,
                    val : data.assessmentValues.CARE_NEED_PREFS[item.key]
                };
            });
        }
        await this.assessmentService.setAssessmentStateObject(data);
    }

    async save(){
        const objectToSave = {};
        this.careneedinfo.forEach( element => {
            objectToSave[element.value] = element.val;
        });
        this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEED_PREFS', this.userId, objectToSave).then((response) => {
            // this.dataService.setLastVisitedPage('/assessment/assessmentbar');
            this.navCtrl.navigateForward(['/assessment/assessmentbar']);
        });
    }
    back(){
        this.navCtrl.navigateBack(['/carecircle/list']);
    }
}
