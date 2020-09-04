import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';
import { AssessmentServiceService } from '../assessment-service.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-addshoppinglist',
  templateUrl: './addshoppinglist.page.html',
  styleUrls: ['./addshoppinglist.page.scss'],
})
export class AddshoppinglistPage implements OnInit {

  shoppingForm: FormGroup;
  key;
  careCircleId;
  userId;
  stateObject;
  constructor(private navCtrl: NavController,
              private dataService: DataserviceService,
              private assessmentService: AssessmentServiceService,
              private router: Router) {
    this.shoppingForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required])
    });
  }
  ngOnInit() {
  }
  get shoppingFormControl(){
    return this.shoppingForm.controls;
  }
  back(){
    this.navCtrl.back();
  }
  async ionViewWillEnter(){
    this.key = 'SHOPPING';
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.assessmentService.getAssessmentStateObject().then((data) => {
      this.stateObject = data.assessmentValues.CARE_NEEDS;
    });
  }
  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    if (!(this.key in this.stateObject)){
        this.stateObject[this.key] = [];
    }
    this.stateObject[this.key].push(this.shoppingForm.value);
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      // this.router.navigate(['/assessment/viewshoppinglist']);
      this.navCtrl.back();
    });
  }
  checkValidity(control){
    if (control.touched){
      if (control.invalid){
        return false;
      }
      else{
        return true;
      }
    }
    else{
      return true;
    }
  }
}
