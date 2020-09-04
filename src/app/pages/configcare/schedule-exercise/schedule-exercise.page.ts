import { Component, OnInit } from '@angular/core';
import { ConfigCareServiceService } from '../config-care-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-exercise',
  templateUrl: './schedule-exercise.page.html',
  styleUrls: ['./schedule-exercise.page.scss'],
})
export class ScheduleExercisePage implements OnInit {

  exerciseData: any = null;
  key: any;

  constructor(
    private configCareService: ConfigCareServiceService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async populateOptions(){
    const configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'EXERCISE';
    const configuration = configCareDetails.configCareConfiguration[this.key];
    if (this.key in configCareDetails.configCareValues && configCareDetails.configCareValues[this.key] !== null){
      this.exerciseData = configCareDetails.configCareValues[this.key];
    }
  }

  async ionViewWillEnter(){
    this.populateOptions();
  }

  submit(){
    this.navCtrl.back();
  }
  editItem(item, index){
    this.configCareService.setConfigEditShared(item, this.key, index);
    this.navCtrl.navigateForward('/configcare/addexercise');
  }

}
