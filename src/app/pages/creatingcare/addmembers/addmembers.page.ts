import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../creatingcare.service';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addmembers',
  templateUrl: './addmembers.page.html',
  styleUrls: ['./addmembers.page.scss'],
})
export class AddmembersPage implements OnInit {
  relationList;
  memberForm: FormGroup;
  selectedType = 'CAREGIVER';
  careCircleName;
  constructor(private formBuilder: FormBuilder,
              private _dataService: DataserviceService,
              private _creatingCareService: CreatingcareService,
              private _apiService: ApiService,
              private navCtrl: NavController) {
      this.relationList = ['Father', 'Mother', 'Sibling'];
      const mobileNumberPattern = '^[0-9]+$';
      this.memberForm = this.formBuilder.group({
        memberName: new FormControl('', Validators.required),
        memberRelation : new FormControl('', Validators.required),
        memberEmail: new FormControl('', [Validators.email, Validators.required]),
        memberMobileNumber: new FormControl('', Validators.pattern(mobileNumberPattern) )
      });
  }

  async saveMember(){
    const userData = await this._dataService.getUserInfo();
    const apiRequestBody = {
      careCircleId : await this._creatingCareService.getCareCircleID(),
      careCircleName : await this._creatingCareService.getCareCircleName(),
      createdBy : userData.userId,
      members : [
        {
          userName : this.memberForm.controls.memberName.value,
          email : this.memberForm.controls.memberEmail.value,
          mobile: this.memberForm.controls.memberMobileNumber.value,
          userType: this.selectedType
        }
      ]
    };
    this._apiService.post('careCircle/addUser', apiRequestBody).then((data) => {
      this.navCtrl.navigateForward(['carecircle/list']);
    });

  }

  back(){
    this.navCtrl.back();
  }

  ngOnInit() {

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
