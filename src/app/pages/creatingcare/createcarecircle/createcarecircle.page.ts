import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../creatingcare.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createcarecircle',
  templateUrl: './createcarecircle.page.html',
  styleUrls: ['./createcarecircle.page.scss'],
})
export class CreatecarecirclePage implements OnInit {
  circleForm: FormGroup;
  userName;
  constructor(private formBuilder: FormBuilder,
              private _dataService: DataserviceService,
              private _creatingCareService: CreatingcareService,
              private navCtrl: NavController) {
      const circleNamePattern = '^[a-zA-Z0-9_-]{5,15}$';
      this.circleForm = this.formBuilder.group({
        circleName: new FormControl('', [Validators.pattern(circleNamePattern)])
      });
  }

  createCircle() {
    const circleName = this.circleForm.controls.circleName.value;
    this._creatingCareService.setCareCircleName(circleName);
    this.navCtrl.navigateForward(['/carecircle/addSenior']);
    // logic to create a circle goes here
  }

  checkValidity(control){
    let message = '';
    if (control.touched){
      if (control.invalid){
        if (control.value.length < 5){
          message = 'Name less than 5 characters';
        }
        else if (control.value.length > 15){
          message = 'Name more than 15 characters';
        }
        else {
          message = 'Name contains special characters';
        }
        return {
          valid : false,
          message
        };
      }
      else{
        return {
          valid : true,
          message
        };
      }
    }
    else{
      return {
        valid : true,
        message
      };
    }
  }

  back(){
    this.navCtrl.back();
  }

  async ionViewWillEnter(){
    /*
    pattern confirms to alpha numeric characters with - and _
    min length 5 and max length 15
  */
    const userInfo = await this._dataService.getUserInfo();
    this.userName = userInfo.userName;
  }
  async ngOnInit() {
    const userInfo = await this._dataService.getUserInfo();
    this.userName = userInfo.userName;
  }


}
