import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  PopoverController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';
import { DeleteassesmentmodalComponent } from './deleteassesmentmodal/deleteassesmentmodal.component';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';
import { ApiService } from 'src/app/http.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

@Component({
  selector: 'app-assessmentbar',
  templateUrl: './assessmentbar.page.html',
  styleUrls: ['./assessmentbar.page.scss'],
})
export class AssessmentbarPage implements OnInit {
  isLinear = false;
  stepperData: any[];
  tempUrl: string;
  assessmentData: any;
  careCircleId: string;
  careCircleName: string;
  activeItem = null;
  validForm = false;
  constructor(
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

  ngOnInit() {}
  async ionViewWillEnter(){
    // this.dataService.setLastVisitedPage('/assessment/assessmentbar');
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.careCircleName = await this._creatingCareService.getCareCircleName();
    const userData = await this.dataService.getUserInfo();
    const userId = userData.userId;
    this.assessmentData = await this.apiService.get('assessment', {careCircleId: this.careCircleId, userId });
    await this.assessmentService.setAssessmentStateObject(this.assessmentData);
    const careNeedPrefs = this.assessmentData.assessmentConfiguration.CARE_NEED_PREFS.options;
    const careNeedPrefsValues = this.assessmentData.assessmentValues.CARE_NEED_PREFS;
    const careNeedValues = this.assessmentData.assessmentValues.CARE_NEEDS;
    console.log(this.assessmentData);
    let openFlag = false;

    this.stepperData = [];
    Object.keys(this.assessmentData.assessmentConfiguration).forEach(assessmentKey => {
      if (assessmentKey !== 'CARE_NEED_PREFS'){
        const properties = this.assessmentData.assessmentConfiguration[assessmentKey].properties;
        if (properties.enabled){
          const temp: any = {};
          temp.name = properties.name;
          temp.key = properties.key;
          temp.pathUrl = properties.pathUrl;
          temp.children = [];
          temp.status = assessmentKey === 'CARE_NEEDS' ? 'completed' : 'pending';
          temp.open = assessmentKey === 'CARE_NEEDS';
          this.stepperData.push(temp);
        }
      }
    });
    careNeedPrefs.forEach(careNeed => {
      if (careNeed.assessment && careNeedPrefsValues !== null && careNeed.key in careNeedPrefsValues && careNeedPrefsValues[careNeed.key] !== null && (careNeedPrefsValues[careNeed.key] !== '' && careNeedPrefsValues[careNeed.key] !== 'none')){
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
    for (let i = 1; i < this.stepperData.length; i++){
      if (!openFlag){
        if (this.assessmentData.assessmentValues[this.stepperData[i].key] === null){
          this.stepperData[i].status = 'active';
          this.stepperData[i].open = true;
          openFlag = true;
          this.activeItem = this.stepperData[i];
        }
        else{
          this.stepperData[i].status = 'completed';
        }
      }
    }
    this.validForm = !openFlag;
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
  activateStepper(item){
    if (item.key !== 'CARE_NEEDS'){
      if (item.status !== 'pending'){
        if (this.activeItem){
          this.activeItem.open = false;
        }
        this.activeItem = item;
        item.open = true;
        // item.status = 'active';
      }
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
      componentProps: {careCircleName: this.careCircleName},
      backdropDismiss: true,
    });
    modal.onDidDismiss().then(response => {
      if (response.data === 'delete'){
        this.deleteAssessment();
      }
    });
    return await modal.present();
  }
  gotoUrl(path) {
    this.navCtrl.navigateForward(['/assessment/' + path]);
  }
  back(){
    this.navCtrl.navigateBack('/assessment');
  }
  deleteAssessment(){
    this.apiService.delete('assessment/?careCircleId=' + this.careCircleId, {}).then((response: any) => {
      if (response){
        this.assessmentService.setAssessmentStateObject(null);
        this.navCtrl.navigateBack(['/carecircle/showcarecircle']);
      }
    });
  }
}
