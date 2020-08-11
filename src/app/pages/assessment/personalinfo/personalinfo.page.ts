import { FormControl, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.page.html',
  styleUrls: ['./personalinfo.page.scss'],
})
export class PersonalinfoPage implements OnInit {
  stateObject: any = {};
  careCircleId;
  userId;
  key: string;
  livesWith = [];
  constructor(
    private navCtrl: NavController,
    formBuilder: FormBuilder,
    private assessmentService: AssessmentServiceService,
    private dataService: DataserviceService, ) {
    this.personalInfoForm = formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dobDate: new FormControl('', [Validators.required]),
      dobMonth: new FormControl('', [Validators.required]),
      dobYear: new FormControl('', [Validators.required]),
      livesWith: new FormControl('', [Validators.required]),
      pastProfession: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      country: new FormControl('', []),
      city: new FormControl('', []),
      emergencyContactPerson: new FormControl('', [Validators.required]),
      emergencyContactNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      emergencyContactNumberCode: new FormControl('', [Validators.required, Validators.maxLength(5)])
    });
  }
  personalInfoForm: FormGroup;

  ngOnInit() {}

  async ionViewWillEnter(){
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.key = 'PERSONAL_INFORMATION';
    const data = await this.assessmentService.getAssessmentStateObject();
    this.livesWith = data.assessmentConfiguration[this.key].lives_with;
    this.stateObject = data.assessmentValues[this.key];
    if (this.stateObject != null){
      Object.keys(this.stateObject).forEach(key => {
        console.log(key, this.stateObject[key]);
        this.personalInfoForm.controls[key].setValue(this.stateObject[key]);
      });
    }
  }

  save(){
    console.log(this.personalInfoForm.value);
    this.stateObject = this.personalInfoForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, this.key, this.userId, this.stateObject).then((response) => {
      console.log(response);
      this.navCtrl.back();
    });
    // this.navCtrl.back();
  }
  selectGender(value){
    this.personalInfoForm.controls.gender.setValue(value);
  }
}
