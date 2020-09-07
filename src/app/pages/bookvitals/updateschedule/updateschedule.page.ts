import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { BookVitalsService } from '../book-vital.service';
import { ConfigCareServiceService } from '../../configcare/config-care-service.service';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

@Component({
  selector: 'app-updateschedule',
  templateUrl: './updateschedule.page.html',
  styleUrls: ['./updateschedule.page.scss'],
})
export class UpdateschedulePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private configCareService: ConfigCareServiceService,
    private bookVitalService: BookVitalsService,
    private dataService: DataserviceService,
    private _creatingCareService: CreatingcareService) { }
  excludedActivities = ['MEDICATION', 'SHOPPING', 'VITALS'];
  configCareDetails;
  vitalValues: any = {};
  date = moment().format('LL');
  formData: any = {imageList: [], activity: {}, vital: {}, medication: {}, shopping: {}};
  activityList = [];
  vitalList = [];
  medicationList = [];
  shoppingList = [];
  dataLoaded = false;
  updateFlag = false;
  selectedPost: any = {};
  ngOnInit() {
  }

  generateClick(category, key: any) {
    this.formData[category][key] = !this.formData[category][key];
    if (!this.formData[category][key]){
      delete this.formData[category][key];
    }
  }
  back(){
    this.navCtrl.back();
  }
  async ionViewWillEnter(){
    const userData = await this.dataService.getUserInfo();
    const members = (await this._creatingCareService.getCareCircleDetails()).members;
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    const configCareValues = this.configCareDetails.configCareValues;
    this.vitalList = this.bookVitalService.getVitalsSchedule(this.configCareDetails);
    this.vitalValues = await this.bookVitalService.getVitals();
    let schedule: any = await this.configCareService.getCalendatSchedule(true);
    console.log(schedule);
    schedule = schedule.filter((item) => {
      if (item.activityId){
        if (item.values.assignedTo?.userId){
            return members.indexOf(item.values.assignedTo?.userId) >= 0;
        }
        else{
          return false;
        }
      }else if (item.assignedTo){
        return members.indexOf(item.assignedTo.userId) >= 0;
      }
    });
    this.selectedPost = await this.bookVitalService.getSelectedPost();
    if (this.selectedPost){
      this.formData = this.selectedPost.values;
      this.updateFlag = true;
      this.bookVitalService.setSelectedPost(null);
    }
    const keys: any = {};
    this.activityList = schedule.filter(item => {
      if (item.key === 'MEDICATION'){
        const configDetails = configCareValues.MEDICATION.find(val => item.hash === val.hash);
        item.name = configDetails?.name;
        item.type = configDetails?.type;
        item.dosage = configDetails?.dosage;
        this.medicationList.push(item);
      }
      else if (item.key === 'SHOPPING'){
        this.shoppingList.push(...item.values.list);
      }
      if (!keys[item.key]){
        return this.excludedActivities.indexOf(item.key) === -1;
      }
      else{
        return false;
      }
    }).map(item => item.key);
    this.dataLoaded = true;
  }
  async save(commit= false){
    this.vitalList.forEach(vital => {
      if (this.vitalValues[vital.type]?.length){
        this.formData.vital[vital.label] = JSON.parse(this.vitalValues[vital.type][0].values);
      }
    });
    let content: any = [];
    content.push(...Object.keys(this.formData.activity));
    if (Object.keys(this.formData.medication).length){
      content.push('Medication: ' + [...Object.keys(this.formData.medication)].slice(0, 3).join(','));
    }
    if (Object.keys(this.formData.shopping).length){
      content.push('Shopping: ' + [...Object.keys(this.formData.shopping)].slice(0, 3).join(','));
    }
    content = content.join(', ');
    this.formData.content = content;
    if (commit){
      this.formData.status = 'COMPLETED';
    }
    else{
      this.formData.status = 'IN_PROGRESS';
    }
    if (this.updateFlag){
      const response = await this.bookVitalService.updatePost(this.selectedPost.postId, this.formData);
    }
    else{
      const response = await this.bookVitalService.addPost('SCHEDULE', this.formData);
    }
    window.dispatchEvent(new CustomEvent('updatePosts'));
    this.navCtrl.back();
  }
}
