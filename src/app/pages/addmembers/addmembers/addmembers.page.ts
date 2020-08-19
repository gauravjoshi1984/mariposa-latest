import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, CheckboxControlValueAccessor, FormArray } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addmembers',
  templateUrl: './addmembers.page.html',
  styleUrls: ['./addmembers.page.scss'],
})
export class AddmembersPage implements OnInit {

  shifttimeform:FormGroup;
  relationList;
  memberForm: FormGroup;

  status1:boolean=false;
  status2=false;
  
  
  selectedType = 'CAREGIVER';
  careCircleName;
  selectedDays = ["Monday","Wednesday"];
  daysList = [
    {
      name: 's',
      value: 'Sunday',
    },
    {
      name: 'm',
      value: 'Monday',
    },
    {
      name: 't',
      value: 'Tuesday',
    },
    {
      name: 'w',
      value: 'Wednesday',
    },
    {
      name: 't',
      value: 'Thursday',
    },
    {
      name: 'f',
      value: 'Friday',
    },
    {
      name: 's',
      value: 'Saturday',
    },
  ];

  constructor(private formBuilder: FormBuilder,
              private _dataService: DataserviceService,
              private _creatingCareService: CreatingcareService,
              private _apiService: ApiService,
              private navCtrl: NavController,
              private fbuilder:FormBuilder
              ) {
                this.shifttimeform=this.fbuilder.group({timeshift:this.fbuilder.array([])})
      this.relationList = ['Father', 'Mother', 'Sibling'];
      const mobileNumberPattern = '^[0-9]+$';
      this.memberForm = this.formBuilder.group({
        memberName: new FormControl('', Validators.required),
        checkbox1: new FormControl('', Validators.required),
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
    this._apiService.post('careCircleAddUser', apiRequestBody).then((data) => {
      this.navCtrl.navigateForward(['carecircle/list']);
    });

  }

  back(){
    this.navCtrl.back();
  }

  ngOnInit() {
    this.addtimeshift()

  }
  addremoveDay(item) {
    if (this.selectedDays.includes(item.value)) {
      const index = this.selectedDays.indexOf(item.value);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(item.value);
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


  addCheckbox(event:any){
    console.log(this.status1)
    if(event.detail.checked==true){
     this.status2=true;
     this.status1=true;
      
    }
    else{
      this.status2=false;
      this.status1=false;
    }
    
  }

  addtimeshift(){
    const add=this.shifttimeform.get('timeshift')as FormArray;
    add.push(this.fbuilder.group({
      startTime:"",
      endTime:"",
      startDate:"2020-May-19",
      endDate:"2020-May-19",
      repeat:[],
      
    }))

    console.log(this.shifttimeform)

  }

  changestartdate(i){
// this.shifttimeform.controls.timeshift.at(i).patchValue([i]).
console.log("controler",this.shifttimeform)
  }

  onclick(i){
// console.log(JSON.parse(i))
// let x=new Date(i).toDateString();
console.log(i)
  }




}
