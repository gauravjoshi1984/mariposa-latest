import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-homerepair',
  templateUrl: './homerepair.page.html',
  styleUrls: ['./homerepair.page.scss'],
})
export class HomerepairPage implements OnInit {
  constructor(private dataService: DataserviceService,
              private navCtrl: NavController,
              private assessmentService: AssessmentServiceService) {
                this.homeRepairForm = new FormGroup({});
              }
  homeRepairForm: FormGroup;
  careCircleId;
  userId;
  appliances;
  stateObject;
  readyFlag;
  key: string;

  imageList = [];

  ngOnInit() {
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject[this.key] = {...this.homeRepairForm.value, imageList: this.imageList};
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
  }
  generateClick(item: any) {
    this.homeRepairForm.controls[item].setValue(!this.homeRepairForm.controls[item].value);
  }
  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.key = 'HOME_REPAIR';
    this.homeRepairForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {
      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (this.stateObject != null && this.stateObject[this.key] != null){
        Object.keys(this.stateObject[this.key]).forEach((element: any) => {
          this.homeRepairForm.addControl(element, new FormControl(this.stateObject[this.key][element]));
        });
        this.imageList = this.homeRepairForm.controls.imageList ? this.homeRepairForm.controls.imageList.value : [];
      }
      else{
        // data is not present
        this.homeRepairForm.addControl('instructions', new FormControl());
        data.assessmentConfiguration.CARE_NEEDS[this.key].appliances.forEach(element => {
          this.homeRepairForm.addControl(element, new FormControl());
        });
      }
      this.appliances = data.assessmentConfiguration.CARE_NEEDS[this.key].appliances;
      this.readyFlag = true;
    });
  }

}
