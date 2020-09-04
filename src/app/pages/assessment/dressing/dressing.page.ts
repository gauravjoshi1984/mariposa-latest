import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http.service';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.page.html',
  styleUrls: ['./dressing.page.scss'],
})
export class DressingPage implements OnInit {
  constructor(private router: Router,
              private apiService: ApiService,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService,
              private navCtrl: NavController) { }


  formData: any = [];
  careCircleId;
  userId;
  stateObject;
  readyFlag;
  sharedKey = 'outfit';

  imageList = [];

  addMore(arrayName){
    this.formData[arrayName].push({value: ''});
    console.log('form', this.formData);
  }
  ngOnInit() {
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.DRESSING = this.formData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
  }
  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'DRESSING';

    this.assessmentService.getAssessmentStateObject().then((data) => {
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        this.formData = data.assessmentValues.CARE_NEEDS[key];
      }
      const newOutfit = this.assessmentService.getAssessmentShared(this.sharedKey);
      if (newOutfit){
        this.formData.push(newOutfit.obj);
        this.assessmentService.setAssessmentShared(null, null, this.sharedKey);
      }
      const outfitEdit = this.assessmentService.getAssessmentEditShared(this.sharedKey);
      if (outfitEdit){
        this.formData[outfitEdit.index] = outfitEdit.obj;
        this.assessmentService.setAssessmentEditShared(null, null, this.sharedKey);
      }
      this.readyFlag = true;
    });
  }
  async editOutfit(outfit, index){
    await this.assessmentService.setAssessmentEditShared(outfit, null, this.sharedKey, index);
    this.navCtrl.navigateForward(['/assessment/addoutfit']);
  }
}
