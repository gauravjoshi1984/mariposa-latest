import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bathing',
  templateUrl: './bathing.page.html',
  styleUrls: ['./bathing.page.scss'],
})
export class BathingPage implements OnInit {
  constructor(private dataService: DataserviceService,
              private navCtrl: NavController,
              private assessmentService: AssessmentServiceService,
              private formBuilder: FormBuilder) {
      this.bathingForm = new FormGroup({});
    }
  bathingForm: FormGroup;
  careCircleId;
  userId;
  stateObject;
  readyFlag = false;

  imageList = [];

  ngOnInit() {
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject.BATHING = {...this.bathingForm.value, imageList: this.imageList};
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });

  }

  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = 'BATHING';
    this.bathingForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {

      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null){
        // data is present
        Object.keys(data.assessmentValues.CARE_NEEDS[key]).forEach((element: any) => {
          this.bathingForm.addControl(element, new FormControl(data.assessmentValues.CARE_NEEDS[key][element]));
          this.imageList = this.bathingForm.controls.imageList ? this.bathingForm.controls.imageList.value : [];
        });
      }
      else{
        // data is not present
        this.bathingForm.addControl('instructions', new FormControl());
      }
      this.readyFlag = true;
    });
  }
}
