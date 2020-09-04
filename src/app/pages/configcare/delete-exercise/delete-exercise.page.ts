import { Component, OnInit } from '@angular/core';
import { ConfigCareServiceService } from '../config-care-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-delete-exercise',
  templateUrl: './delete-exercise.page.html',
  styleUrls: ['./delete-exercise.page.scss'],
})
export class DeleteExercisePage implements OnInit {

  exerciseData: any = null;
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
    this.key = 'EXERCISE';
    if (this.key in configCareDetails.configCareValues && configCareDetails.configCareValues[this.key] !== null){
      this.exerciseData = configCareDetails.configCareValues[this.key];
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
    const finalList = this.exerciseData.filter((val, idx) => this.selectedItems.indexOf(idx) < 0);
    this.configCareService.saveConfigCareDetails(this.key, finalList).then(data => {
      this.navCtrl.back();
    });
  }

}
