import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, CheckboxControlValueAccessor, FormArray } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Keyboard } = Plugins;
@Component({
  selector: 'app-addmembers',
  templateUrl: './addmembers.page.html',
  styleUrls: ['./addmembers.page.scss'],
})
export class AddmembersPage implements OnInit {
  relationList;
  memberForm: FormGroup;
  shiftDetails = [];
  spouseAsCaregiver = false;
  enterVitals = false;
  isKeyboardOpen: boolean;

  selectedType = 'CAREGIVER';
  careCircleName;
  selectedDays = [];
  daysList = [];

  constructor(
    private formBuilder: FormBuilder,
    private _dataService: DataserviceService,
    private _creatingCareService: CreatingcareService,
    private _apiService: ApiService,
    private navCtrl: NavController,
    private fbuilder: FormBuilder,
    private dataService: DataserviceService) {
      this.shiftDetails.push({
        startTime: '12:00',
        endTime: '12:00',
        startDate: '2020-10-20',
        endDate: '2020-10-20',
        repeat: [],
      });
      this.daysList = _dataService.getDaysList();
      this.relationList = ['Father', 'Mother', 'Sibling'];
      const mobileNumberPattern = '^[0-9]+$';
      this.memberForm = this.formBuilder.group({
        memberName: new FormControl('', Validators.required),
        checkbox1: new FormControl('', Validators.required),
        memberRelation : new FormControl('', Validators.required),
        memberEmail: new FormControl('', [Validators.email, Validators.required]),
        memberMobileNumber: new FormControl('', Validators.pattern(mobileNumberPattern) )
      });
      this.dataService.getDeviceInfo().then(deviceDetails => {
        if (deviceDetails.platform !== 'web'){
          Keyboard.addListener('keyboardWillShow', () => {
            this.isKeyboardOpen = true;
          }),
          Keyboard.addListener('keyboardWillHide', () => {
            this.isKeyboardOpen = false;
          }),
          this.isKeyboardOpen = false;
        }
      });
  }

  async saveMember(){
    const userData = await this._dataService.getUserInfo();
    const shifts = [];
    if (this.selectedType === 'CAREGIVER'){
      this.shiftDetails.forEach(shift => {
        let time = shift.startTime.split(':');
        shift.startDate = shift.startDate.split('T')[0];
        shift.endDate = shift.endDate.split('T')[0];
        const temp: any = {...shift};
        temp.startTime = {hours: +time[0], minutes: +time[1]};
        time = shift.endTime.split(':');
        temp.endTime = {hours: +time[0], minutes: +time[1]};
        shifts.push(temp);
      });
    }
    const apiRequestBody = {
      careCircleId : await this._creatingCareService.getCareCircleID(),
      careCircleName : await this._creatingCareService.getCareCircleName(),
      createdBy : userData.userId,
      members : [
        {
          userName : this.memberForm.controls.memberName.value,
          email : this.memberForm.controls.memberEmail.value,
          mobile: this.memberForm.controls.memberMobileNumber.value,
          userType: this.spouseAsCaregiver ? 'SPOUSE_CAREGIVER' : this.selectedType,
          relation: this.memberForm.controls.memberRelation.value,
          configuration: {permissions: {ENTER_VITALS: this.enterVitals}, shifts}
        }
      ],
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
  addremoveDay(item, repeatDays) {
    if (repeatDays.includes(item.value)) {
      const index = repeatDays.indexOf(item.value);
      repeatDays.splice(index, 1);
    } else {
      repeatDays.push(item.value);
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

  async ionViewWillEnter(){
    this.careCircleName = await this._creatingCareService.getCareCircleName();
  }


  addCheckbox(event: any){
    if (event.detail.checked == true){
     this.enterVitals = true;
     this.spouseAsCaregiver = true;

    }
    else{
      this.enterVitals = false;
      this.spouseAsCaregiver = false;
    }

  }

  addtimeshift(){
    this.shiftDetails.push({
      startTime: '12:00',
      endTime: '12:00',
      startDate: '2020-10-20',
      endDate: '2020-10-20',
      repeat: [],
    });
  }

  changestartdate(i){
// this.shifttimeform.controls.timeshift.at(i).patchValue([i]).
    // console.log('controler', this.shifttimeform);
  }

  onclick(i){
// console.log(JSON.parse(i))
// let x=new Date(i).toDateString();
    console.log(i);
  }




}
