import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigCareServiceService } from '../config-care-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-assignshoppinglist',
  templateUrl: './assignshoppinglist.page.html',
  styleUrls: ['./assignshoppinglist.page.scss'],
})
export class AssignshoppinglistPage implements OnInit {
  configCareDetails: any;
  key: any;
  shoppingData = [];
  shoppinglist = [
  {
    name: 'Tissue Roll',
    brand: 'Quality Brand',
    isChecked: false,
  },
  {
    name: 'Tooth Paste',
    brand: 'Pepsodent',
    isChecked: false,
  }
 ];

  timeList = [];

  customPickerOptions: any;
  constructor(
    private configCareService: ConfigCareServiceService,
    private dataService: DataserviceService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    //  this.addDate();
  }
  async populateOptions(){
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    this.key = 'EXERCISE';
    const configuration = this.configCareDetails.configCareConfiguration[this.key];
    configuration.type.forEach(element => {
      this.shoppingData.push({name : element, value : element});
    });
    const savedConfig = this.configCareDetails.configCareValues[this.key];
    if (savedConfig != null){
        this.timeList = savedConfig.timeList;
    }
  }
  addDate() {
    this.timeList.push(new Date());
  }
  addtime(ev, key){
    this.timeList = ev;
  }
  save(){
    console.log(this.timeList);
  }
}
