import { Component, OnInit } from '@angular/core';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

@Component({
  selector: 'app-schedulemeals',
  templateUrl: './schedulemeals.page.html',
  styleUrls: ['./schedulemeals.page.scss'],
})
export class SchedulemealsPage implements OnInit {
  mealData: any = null;
  key: any;

  constructor(
    private configCareService: ConfigCareServiceService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async populateOptions(){
    const configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'COOKING';
    const configuration = configCareDetails.configCareConfiguration[this.key];
    if (this.key in configCareDetails.configCareValues && configCareDetails.configCareValues[this.key] !== null){
      this.mealData = configCareDetails.configCareValues[this.key];
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
    this.navCtrl.navigateForward('/configcare/addmeals');
  }
}
