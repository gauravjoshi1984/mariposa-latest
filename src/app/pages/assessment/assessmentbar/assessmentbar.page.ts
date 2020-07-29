import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  PopoverController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';
import { DeleteassesmentmodalComponent } from './deleteassesmentmodal/deleteassesmentmodal.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import { ApiService } from 'src/app/http.service';
import { Location } from '@angular/common';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

const careNeeds = [
  {
    name: 'Companionship',
    open: false,
    status: 'completed',
    pathUrl: 'companionship',
  },
  {
    name: 'Exercise/PT',
    open: true,
    status: 'active',
    pathUrl: 'exercise',
  },
  {
    name: 'Shopping/Errands',
    open: false,
    status: 'pending',
    pathUrl: 'viewshoppinglist',
  },
  {
    name: 'Use of Electronics/Devices',
    open: false,
    status: 'pending',
    pathUrl: 'useofelectronics',
  },
  {
    name: 'Home Repair/Maintenance',
    open: false,
    status: 'pending',
    pathUrl: 'homerepair',
  },
  {
    name: 'Gardening',
    open: false,
    status: 'pending',
    pathUrl: 'gardening',
  },
  {
    name: 'House Work',
    open: false,
    status: 'pending',
    pathUrl: 'housework',
  },
  {
    name: 'Laundry',
    open: false,
    status: 'pending',
    pathUrl: 'laundry',
  },
  {
    name: 'Driving/Transportation',
    open: false,
    status: 'pending',
    pathUrl: 'driving',
  },
  {
    name: 'Cooking/Meal Preperation',
    open: false,
    status: 'pending',
    pathUrl: 'meals',
  },
  {
    name: 'Medication Management',
    open: false,
    status: 'pending',
    pathUrl: 'medication',
  },
  {
    name: 'Mobility',
    open: false,
    status: 'pending',
    pathUrl: 'mobility',
  },
  {
    name: 'Bathing',
    open: false,
    status: 'pending',
    pathUrl: 'bathing',
  },
  {
    name: 'Sleep',
    open: false,
    status: 'pending',
    pathUrl: 'sleepassistance',
  },
  {
    name: 'Dressing',
    open: false,
    status: 'pending',
    pathUrl: 'dressing',
  },
  {
    name: 'Grooming',
    open: false,
    status: 'pending',
    pathUrl: 'grooming',
  },
  {
    name: 'Oral Care',
    open: false,
    status: 'pending',
    pathUrl: 'oralcare',
  },
  {
    name: 'Wound Care',
    open: false,
    status: 'pending',
    pathUrl: 'woundcare',
  },
  {
    name: 'Eating',
    open: false,
    status: 'pending',
    pathUrl: 'eating',
  },
  {
    name: 'Toileting',
    open: false,
    status: 'pending',
    pathUrl: 'toileting',
  },
  {
    name: 'Management of Finances',
    open: false,
    status: 'pending',
    pathUrl: 'managingfinances',
  },
  {
    name: 'Check Vitals',
    open: false,
    status: 'pending',
    pathUrl: 'checkvitals',
  }
];
@Component({
  selector: 'app-assessmentbar',
  templateUrl: './assessmentbar.page.html',
  styleUrls: ['./assessmentbar.page.scss'],
})
export class AssessmentbarPage implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  stepperData: any[];
  tempUrl: string;
  assessmentData: any;
  careCircleName: string;
  activeItem = null;
  constructor(
    private _formBuilder: FormBuilder,
    public popoverController: PopoverController,
    public modalController: ModalController,
    private navCtrl: NavController,
    private dataService: DataserviceService,
    private assessmentService: AssessmentServiceService,
    private apiService: ApiService,
    private _creatingCareService: CreatingcareService,
  ) {
    this.stepperData = [];
}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  async ionViewWillEnter(){
    const careCircleId = await this.assessmentService.getCareCircleId();
    this.careCircleName = await this._creatingCareService.getCareCircleName();
    const userData = await this.dataService.getUserInfo();
    const userId = userData.userId;
    this.assessmentData = await this.apiService.get('assessment', {careCircleId, userId });
    console.log(this.assessmentData);
    const careNeedPrefs = this.assessmentData.assessmentConfiguration.CARE_NEED_PREFS.options;
    const careNeedPrefsValues = this.assessmentData.assessmentValues.CARE_NEED_PREFS;
    const careNeedValues = this.assessmentData.assessmentValues.CARE_NEEDS;

    /* {
      name: 'Companionship',
      open: false,
      status: 'completed',
      pathUrl: 'companionship',
    }, */
    let openFlag = false;
    this.stepperData = [{
      name: 'Care Needs',
      desc: 'Companionship, Exercise, Shopping...',
      open: true,
      status: 'completed',
      children: [],
    },
    {
      name: 'Personal Information',
      open: false,
      status: 'pending',
      children: [],
      pathUrl: 'personalinfo',
    },
    {
      name: 'Medical & Psychiatric Conditions',
      open: false,
      status: 'pending',
      children: [],
      pathUrl: 'medicalconditions',
    },
    {
      name: 'Home Safety',
      open: false,
      status: 'pending',
      children: [],
      pathUrl: 'homeandsafety',
    },
    {
      name: 'Motivations',
      open: false,
      status: 'pending',
      children: [],
      pathUrl: 'motivation',
    },
  ];

    careNeedPrefs.forEach(careNeed => {
      if (careNeedPrefsValues !== null && careNeed.key in careNeedPrefsValues && careNeedPrefsValues[careNeed.key] !== null && (careNeedPrefsValues[careNeed.key] !== '' && careNeedPrefsValues[careNeed.key] !== 'none')){
        const temp = {name: careNeed.label, open: false, status: 'pending', pathUrl: careNeed.pathUrl};
        if (!openFlag){
          if (careNeedValues !== null && (careNeed.key in careNeedValues) && careNeedValues[careNeed.key] !== null){
            temp.status = 'completed';
          }
          else{
            temp.status = 'active';
            temp.open = true;
            openFlag = true;
            this.activeItem = temp;
          }
        }
        this.stepperData[0].children.push(temp);
      }
    });
    this.stepperData[0].desc = this.stepperData[0].children.map(child => child.name).slice(0, 2).join(', ') + '...';
    // this.changetoActive();
  }
  changetoActive() {
    for (let index = 0; index < this.stepperData[0].children.length; index++) {
      const childrens = this.stepperData[0].children;
      const element = childrens[index];
      if (element.pathUrl === this.tempUrl) {
        element.status = 'completed';
        element.open = false;
        this.stepperData[0].children[index + 1].status = 'active';
        this.stepperData[0].children[index + 1].open = true;
      }
    }
  }
  changeStepper(item) {
    if (!item.open) {
      this.stepperData.forEach((element) => {
        element.open = false;
        element.status = 'pending';
        if (element.children.length !== 0) {
          element.open = true;
          element.status = 'completed';
          element.children.forEach((child) => {
            child.status = 'pending';
            child.open = false;
          });
        }
        if (element.name === item.name && element.children.length === 0) {
          element.status = 'active';
          element.open = true;
        } else if (element.name === item.name && element.children.length > 0) {
          element.status = 'completed';
          element.open = true;
        }
      });
    }
  }
  changechildStepper(childNodes, item) {
    this.stepperData.forEach((element) => {
      if (element.open && element.children.length === 0) {
        element.open = false;
        element.status = 'pending';
      }
    });
    // let temp = false;
    childNodes.forEach((element) => {
      element.open = false;
      if (element.status !== 'completed') {
        element.status = 'pending';
      }
      // element.status = temp ? "completed" : "pending";
      if (element.name === item.name) {
        // temp = false;
        if (element.status !== 'completed') {
          element.status = 'active';
        }
        element.open = true;
      }
    });
  }
  activateChildStepper(item){
    if (item.status !== 'pending'){
      if (this.activeItem){
        this.activeItem.open = false;
      }
      this.activeItem = item;
      item.open = true;
    }
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'popoverstyle',
      event: ev,
      translucent: true,
      mode: 'ios',
    });
    popover.onDidDismiss().then((x) => {
      if (x.data === 'delete') {
        this.presentModal();
      }
    });
    return await popover.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DeleteassesmentmodalComponent,
      cssClass: 'deletemodalclass',
      backdropDismiss: true,
    });

    return await modal.present();
  }
  gotoUrl(path) {
    this.navCtrl.navigateForward(['/assessment/' + path]);
  }
  back(){
    this.navCtrl.navigateBack('/assessment');
  }
}
