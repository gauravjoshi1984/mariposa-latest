import { Component, OnInit } from '@angular/core';
import { ConfigCareServiceService } from '../config-care-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deletevitals',
  templateUrl: './deletevitals.page.html',
  styleUrls: ['./deletevitals.page.scss'],
})
export class DeletevitalsPage implements OnInit {
  vitalData: any = null;
  key: any;
  selectedItems = [];
  stateObject = {};

  ngOnInit() {
  }
  constructor(
    private configCareService: ConfigCareServiceService,
    private navCtrl: NavController
  ) { }

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

  back(){
    this.navCtrl.back();
  }
  toggleSelection(event, index){
    if (event.target.checked){
      this.selectedItems.push(index);
    }
    else{
      this.selectedItems = this.selectedItems.filter(idx => idx !== index);
    }
  }
  deleteItems(){
    const finalList = this.vitalData.filter((val, idx) => this.selectedItems.indexOf(idx) < 0);
    this.configCareService.saveConfigCareDetails(this.key, finalList).then(data => {
      this.navCtrl.back();
    });
  }
}
