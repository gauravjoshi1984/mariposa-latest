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

  shoppingitems = [
    {name: 'Cotton', brand: 'Hightech'},
    {name: 'Tissue Roll', brand: 'Apple'},
    {name: 'Headphones', brand: 'Boltz'},

  ];
  key;
  constructor(private dataService: DataserviceService,
              private assessmentService: AssessmentServiceService,
              private navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.navCtrl.navigateForward(['/assessment/assessmentbar']);
  }


  async ionViewWillEnter(){
    this.key = 'SHOPPING';
    this.assessmentService.getAssessmentStateObject().then((data) => {
      console.log(data);
      this.shoppingitems = data.assessmentValues.CARE_NEEDS[this.key];
    });
  }

}
