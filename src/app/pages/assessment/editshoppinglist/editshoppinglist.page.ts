import { Component, OnInit } from '@angular/core';
import { AssessmentServiceService } from '../assessment-service.service';
import { NavController } from '@ionic/angular';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-editshoppinglist',
  templateUrl: './editshoppinglist.page.html',
  styleUrls: ['./editshoppinglist.page.scss'],
})
export class EditshoppinglistPage implements OnInit {

  constructor(
    private assessmentService: AssessmentServiceService,
    private navCtrl: NavController,
    private dataService: DataserviceService
  ) { }

  shoppingitems = [];
  key;
  careCircleId;
  userId;
  stateObject = {};
  selectedItems = [];

  ngOnInit() {
  }
  async ionViewWillEnter(){
    this.key = 'SHOPPING';
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.assessmentService.getAssessmentStateObject().then((data) => {
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (data.assessmentValues.CARE_NEEDS[this.key]){
        this.shoppingitems = data.assessmentValues.CARE_NEEDS[this.key];
      }
    });
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
    const finalList = this.shoppingitems.filter((val, idx) => this.selectedItems.indexOf(idx) < 0);
    this.stateObject[this.key] = finalList;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
  }
}
