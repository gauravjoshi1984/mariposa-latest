import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { AssessmentServiceService } from '../assessment-service.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-viewshoppinglist',
  templateUrl: './viewshoppinglist.page.html',
  styleUrls: ['./viewshoppinglist.page.scss'],
})
export class ViewshoppinglistPage implements OnInit {

  shoppingitems = [];
  key;
  constructor(private dataService: DataserviceService,
              private assessmentService: AssessmentServiceService,
              private navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.navCtrl.back();
  }
  addMorePage(){
    this.navCtrl.navigateForward(['/assessment/addshoppinglist']);
  }

  async ionViewWillEnter(){
    this.key = 'SHOPPING';
    this.assessmentService.getAssessmentStateObject().then((data) => {
      if (data.assessmentValues.CARE_NEEDS[this.key]){
        this.shoppingitems = data.assessmentValues.CARE_NEEDS[this.key];
      }
    });
  }
}
