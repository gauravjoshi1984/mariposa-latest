import { Component, OnInit } from '@angular/core';
import { ConfigCareServiceService } from '../config-care-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deletemedicine',
  templateUrl: './deletemedicine.page.html',
  styleUrls: ['./deletemedicine.page.scss'],
})
export class DeletemedicinePage implements OnInit {

  medicationData: any = null;
  key: any;
  selectedItems = [];
  stateObject = {};
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
      this.medicationData = configCareDetails.configCareValues[this.key];
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
    const finalList = this.medicationData.filter((val, idx) => this.selectedItems.indexOf(idx) < 0);
    this.configCareService.saveConfigCareDetails(this.key, finalList).then(data => {
      this.navCtrl.back();
    });
  }

}
