import { FormControl, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-sleepassistance',
  templateUrl: './sleepassistance.page.html',
  styleUrls: ['./sleepassistance.page.scss'],
})
export class SleepassistancePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private assessmentService: AssessmentServiceService,
    private dataService: DataserviceService,
    private formBuilder: FormBuilder) {
    this.sleepForm = this.formBuilder.group({
      bedTime: new FormControl('', [Validators.required]),
      wakeupTime: new FormControl('', [Validators.required]),
      nightAssistance: new FormControl(false, [Validators.required]),
      notes: new FormControl('')
    });
  }

  sleepForm: FormGroup;
  key;
  careCircleId;
  userId;
  electronicList = [];
  stateObject;
  formData: any = {sleepType: {}, naps: [{time: '', duration: '30'}]};
  sleepType = [];
  imageList = [];

  ngOnInit() {
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    // this.formData.imageList = this.imageList;
    const finalData = JSON.parse(JSON.stringify({...this.sleepForm.value, ...this.formData}));
    // if (typeof finalData.bedTime === 'string'){
    //   finalData.bedTime = {hour: new Date(finalData.bedTime).getHours(), minute: new Date(finalData.bedTime).getMinutes()};
    // }
    // if (typeof finalData.wakeupTime === 'string'){
    //   finalData.wakeupTime = {hour: new Date(finalData.wakeupTime).getHours(), minute: new Date(finalData.wakeupTime).getMinutes()};
    // }
    // finalData.naps.forEach(nap => {
    //   if (typeof nap.time === 'string'){
    //     nap.time = {hour: new Date(nap.time).getHours(), minute: new Date(nap.time).getMinutes()};
    //     nap.duration = +nap.duration;
    //   }
    // });
    this.stateObject[this.key] = finalData;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
    // console.log(this.sleepForm.value);
    // console.log(this.formData);
  }

  setSleepTypeValue(key){
    this.formData.sleepType[key] = !this.formData.sleepType[key];
  }

  addNewNap(){
    this.formData.naps.push({time: '', duration: '30'});
  }
  async ionViewWillEnter(){
    this.key = 'SLEEP';
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const data = await this.assessmentService.getAssessmentStateObject();
    this.stateObject = data.assessmentValues.CARE_NEEDS;
    this.sleepType = data.assessmentConfiguration.CARE_NEEDS[this.key].sleep_type;
    if (this.stateObject != null && this.stateObject[this.key] != null){
      this.formData.sleepType = this.stateObject[this.key].sleepType;
      this.formData.naps = this.stateObject[this.key].naps;
      this.sleepForm.controls.bedTime.setValue(this.stateObject[this.key].bedTime);
      this.sleepForm.controls.wakeupTime.setValue(this.stateObject[this.key].wakeupTime);
      this.sleepForm.controls.nightAssistance.setValue(this.stateObject[this.key].nightAssistance);
      this.sleepForm.controls.notes.setValue(this.stateObject[this.key].notes);
    }
  }
}
