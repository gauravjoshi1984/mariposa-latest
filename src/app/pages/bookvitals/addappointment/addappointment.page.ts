import { Component, OnInit } from '@angular/core';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { BookVitalsService } from '../book-vital.service';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.page.html',
  styleUrls: ['./addappointment.page.scss'],
})
export class AddappointmentPage implements OnInit {
  currentDate = moment().format('DD-MMM-YYYY');
  min = moment().format('YYYY-MM-DD');
  careCircleDetails;
  constructor(
    private careCircleService: CreatingcareService,
    private bookVitalService: BookVitalsService,
    private navCtrl: NavController
  ) { }

  appointmentForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    hours: new FormControl(''),
    minutes: new FormControl(''),
    location: new FormControl(''),
    date: new FormControl( moment().format('YYYY-MM-DD')),
    instructions: new FormControl(''),
    assignedTo: new FormControl({}, [Validators.required]),
    imageList: new FormControl([]),
  });
  imageList = [];
  timeList = [];

  ngOnInit() {
  }

  addtime(ev, key){
    this.timeList = ev;
  }
  async ionViewWillEnter(){
    this.careCircleDetails = await this.careCircleService.getCareCircleDetails();
    this.careCircleDetails = this.careCircleDetails.members.map(item => {
      return {type: item.userType, assigned: {userId: item.userId, userName: item.userName }};
    });
    // this.careCircleDetails = [{type: 'CAREGIVER'}, ...this.careCircleDetails];
  }
  compareFn(val1, val2): boolean {
    return val1 && val2 ? val1.type === val2.type : val1 === val2;
  }
  save(){
    this.appointmentForm.patchValue({ hours: this.timeList[0].hours });
    this.appointmentForm.patchValue({ minutes: this.timeList[0].minutes });
    this.appointmentForm.patchValue({ imageList: this.imageList });
    this.appointmentForm.patchValue({ date: this.appointmentForm.controls.date.value.split('T')[0] });
    this.bookVitalService.addActivity(this.appointmentForm.controls.type.value, this.appointmentForm.value).then((response: any) => {
      if (response){
        this.navCtrl.back();
      }
    });
  }
}
