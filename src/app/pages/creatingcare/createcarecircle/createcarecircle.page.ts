import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../creatingcare.service';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/toast.service';

@Component({
  selector: 'app-createcarecircle',
  templateUrl: './createcarecircle.page.html',
  styleUrls: ['./createcarecircle.page.scss'],
})
export class CreatecarecirclePage implements OnInit {
  circleForm: FormGroup;
  userName;
  formCreated = false;
  constructor(private formBuilder: FormBuilder,
              private _dataService: DataserviceService,
              private _creatingCareService: CreatingcareService,
              private navCtrl: NavController,
              private toastService: ToastService) {
  }

  createCircle() {
    if (this.circleForm.valid){
      const circleName = this.circleForm.controls.circleName.value;
      this._creatingCareService.setCareCircleName(circleName);
      this.navCtrl.navigateForward(['/carecircle/addSenior']);
      // logic to create a circle goes here
    }
    else{
      this.toastService.presentToast('Please enter valid care circle name!');
    }
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

  back(){
    this.navCtrl.back();
  }

  async ionViewWillEnter(){
    const circleNamePattern = '^[a-zA-Z0-9_-]{5,15}$';
    this.circleForm = this.formBuilder.group({
        // circleName: new FormControl('', [Validators.pattern(circleNamePattern)])
        circleName: new FormControl('', [Validators.required, Validators.minLength(5)])
      });
    const userInfo = await this._dataService.getUserInfo();
    this.userName = userInfo.userName;
    this.formCreated = true;
  }
  ngOnInit() {
  }


}
