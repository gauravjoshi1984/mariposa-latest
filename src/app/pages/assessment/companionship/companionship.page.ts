import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-companionship',
  templateUrl: './companionship.page.html',
  styleUrls: ['./companionship.page.scss'],
})
export class CompanionshipPage implements OnInit {
  companionshipForm: FormGroup;
  careCircleId;
  userId;
  favItemList;
  stateObject;
  constructor(private dataService: DataserviceService,
              private assessmentService: AssessmentServiceService,
              private navCtrl: NavController,
              private formBuilder: FormBuilder) {
    this.companionshipForm = this.formBuilder.group({ });
   }

   imageList = [];

  ngOnInit() {
  }

  generateClick(item: any) {
    this.companionshipForm.controls[item].setValue(!this.companionshipForm.controls[item].value);
  }
  back(){
    this.navCtrl.back();
  }
  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.companionshipForm.controls.imageList ? this.companionshipForm.controls.imageList.setValue(this.imageList) : this.companionshipForm.addControl('imageList', new FormControl(this.imageList));
    this.stateObject.COMPANIONSHIP = this.companionshipForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
  }

  async ionViewWillEnter(){
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'COMPANIONSHIP';
    this.companionshipForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {
      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        // data is present
        Object.keys(this.stateObject[key]).forEach((element: any) => {
          this.companionshipForm.addControl(element, new FormControl(this.stateObject[key][element]));
        });
      }
      else{
        // data is not present
        this.companionshipForm.addControl('instructions', new FormControl());
        this.companionshipForm.addControl('imageList', new FormControl());
        data.assessmentConfiguration.CARE_NEEDS[key].fav_activities.forEach(element => {
          this.companionshipForm.addControl(element, new FormControl());
        });
      }
      this.imageList = this.companionshipForm.controls.imageList.value;
      this.favItemList = data.assessmentConfiguration.CARE_NEEDS[key].fav_activities;
    });
  }
}
