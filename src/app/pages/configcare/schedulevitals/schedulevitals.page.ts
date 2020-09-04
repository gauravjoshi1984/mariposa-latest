import { Component, OnInit } from '@angular/core';
import { ConfigCareServiceService } from '../config-care-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-schedulevitals',
  templateUrl: './schedulevitals.page.html',
  styleUrls: ['./schedulevitals.page.scss'],
})
export class SchedulevitalsPage implements OnInit {
  key: any;
  vitalData = [];

  constructor(
    private configCareService: ConfigCareServiceService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  async populateOptions(){
    const configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'VITALS';
    if (this.key in configCareDetails.configCareValues && configCareDetails.configCareValues[this.key] !== null){
      this.vitalData = configCareDetails.configCareValues[this.key];
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
    this.navCtrl.navigateForward('/configcare/addvitals');
  }
}
