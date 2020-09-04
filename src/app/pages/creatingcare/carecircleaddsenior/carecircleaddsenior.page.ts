import { Component, OnInit, ChangeDetectorRef, } from '@angular/core';
import { FormBuilder,  FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../creatingcare.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http.service';
import { Location } from '@angular/common';
import { Plugins } from '@capacitor/core';
const { Keyboard } = Plugins;
@Component({
  selector: 'app-carecircleaddsenior',
  templateUrl: './carecircleaddsenior.page.html',
  styleUrls: ['./carecircleaddsenior.page.scss'],
})
export class CarecircleaddseniorPage implements OnInit {
  addEditSeniorForm;
  relationList;
  careCircleName;
  deviceDetails;
  isKeyboardOpen;
  constructor(private formBuilder: FormBuilder,
              private _dataService: DataserviceService,
              private _creatingCareService: CreatingcareService,
              private _router: Router,
              private _apiService: ApiService,
              private _location: Location,
              private detector: ChangeDetectorRef, ) {
      this.relationList = ['Father', 'Mother', 'Sibling', 'Self'];
      const mobileNumberPattern = '^[0-9]+$';
      this.addEditSeniorForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        relation : new FormControl('', Validators.required),
        email: new FormControl('', [Validators.email, Validators.required]),
        mobileNumber: new FormControl('', Validators.pattern(mobileNumberPattern) ),
        vitals : new FormControl(),
        appointments : new FormControl()
      });
      this._dataService.getDeviceInfo().then(deviceDetails => {
        this.deviceDetails = deviceDetails;
        if (deviceDetails.platform !== 'web'){
          Keyboard.addListener('keyboardWillShow', () => {
            this.isKeyboardOpen = true;
            detector.detectChanges();
          }),
          Keyboard.addListener('keyboardWillHide', () => {
            this.isKeyboardOpen = false;
            detector.detectChanges();
          }),
          this.isKeyboardOpen = false;
        }
      });
  }

  async saveSenior(){
    const userData = await this._dataService.getUserInfo();
    // relation is not sent ----- this.addEditSeniorForm.controls['relation'].value
    const apiRequestBody = {
      careCircleName : await this._creatingCareService.getCareCircleName(),
      createdBy : userData.userId,
      members : [
        {
          userName: this.addEditSeniorForm.controls.name.value,
          email: this.addEditSeniorForm.controls.email.value,
          mobile: this.addEditSeniorForm.controls.mobileNumber.value,
          userType: 'SENIOR',
          configuration: {
            vitals : this.addEditSeniorForm.controls.vitals.value,
            appointments : this.addEditSeniorForm.controls.appointments.value
          }
        }
      ]
    };
    this._apiService.post('careCircle', apiRequestBody).then((data: any) => {
      this._creatingCareService.setCareCircleId(data.careCircleId);
      this._dataService.setLastVisitedPage('carecircle/showcarecircle');
      this._router.navigate(['carecircle/list']);
    });
  }

  ngOnInit() {

  }

  back(){
    this._location.back();
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

  async ionViewWillEnter(){
    this.careCircleName = await this._creatingCareService.getCareCircleName();
  }
}
