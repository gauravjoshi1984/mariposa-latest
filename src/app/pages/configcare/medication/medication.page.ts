import { Component, OnInit } from '@angular/core';
import { ConfigCareServiceService } from '../config-care-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.page.html',
  styleUrls: ['./medication.page.scss'],
})
export class MedicationPage implements OnInit {
  medicationList = [];
  key: any;

  constructor(
    private configCareService: ConfigCareServiceService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  async populateOptions(){
    const configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'MEDICATION';
    if (this.key in configCareDetails.configCareValues && configCareDetails.configCareValues[this.key] !== null){
      this.medicationList = configCareDetails.configCareValues[this.key];
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
    this.navCtrl.navigateForward('/configcare/addmedicine');
  }
}
