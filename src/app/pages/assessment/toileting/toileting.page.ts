import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';
import { AssessmentServiceService } from '../assessment-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-toileting',
  templateUrl: './toileting.page.html',
  styleUrls: ['./toileting.page.scss'],
})
export class ToiletingPage implements OnInit {
  constructor(private dataService: DataserviceService,
              private navCtrl: NavController,
              private assessmentService: AssessmentServiceService,
              private formBuilder: FormBuilder) { }
  toiletingForm: FormGroup;
  key;
  careCircleId;
  userId;
  formCreated = false;
  stateObject;

  imageList = [];

  ngOnInit() {

  }

  async ionViewWillEnter(){
    this.key = 'TOILETING';
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.toiletingForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[this.key] != null){
        // data is present
        Object.keys(data.assessmentValues.CARE_NEEDS[this.key]).forEach((element: any) => {
          this.toiletingForm.addControl(element, new FormControl(this.stateObject[this.key][element]));
        });
      }
      else{
        // data is not present
        this.toiletingForm.addControl('instructions', new FormControl());
        this.toiletingForm.addControl('Toilet', new FormControl(false));
        this.toiletingForm.addControl('Commode', new FormControl(false));
      }
      this.formCreated = true ;
    });
  }
  changeToggle(ev: any) {
    console.log(ev);
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject[this.key] = this.toiletingForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.back();
    });
  }

}
