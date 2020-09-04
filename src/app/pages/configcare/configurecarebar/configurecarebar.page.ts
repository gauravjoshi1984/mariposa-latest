import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataserviceService } from '../../dataservice.service';
import { AssessmentServiceService } from '../../assessment/assessment-service.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { ConfigCareServiceService } from '../config-care-service.service';

@Component({
  selector: 'app-configurecarebar',
  templateUrl: './configurecarebar.page.html',
  styleUrls: ['./configurecarebar.page.scss'],
})
export class ConfigurecarebarPage implements OnInit {
  assessmentData: any;
  careCircleId: string;
  careCircleName: string;
  activeItem: any;
  validForm = false;
  stepperData: any = [];
  constructor(
    private navCtrl: NavController,
    private dataService: DataserviceService,
    private assessmentService: AssessmentServiceService,
    private _creatingCareService: CreatingcareService,
    private configCareService: ConfigCareServiceService) {}

  ngOnInit() {}
  async ionViewWillEnter(){
    // this.dataService.setLastVisitedPage('/assessment/assessmentbar');
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.careCircleName = await this._creatingCareService.getCareCircleName();
    const userData = await this.dataService.getUserInfo();
    const userId = userData.userId;
    this.assessmentData = await this.assessmentService.getAssessmentStateObject();
    const careNeedPrefs = this.assessmentData.assessmentConfiguration.CARE_NEED_PREFS.options;
    const careNeedPrefsValues = this.assessmentData.assessmentValues.CARE_NEED_PREFS;
    const careNeedValues = this.assessmentData.assessmentValues.CARE_NEEDS;
    const configCareDetails = await this.configCareService.getConfigCareDetails();
    console.log(configCareDetails);
    const configCareValues = configCareDetails.configCareValues;
    let openFlag = false;
    this.stepperData = [];
    careNeedPrefs.forEach(careNeed => {
      if (careNeed.configureCare === true && careNeedPrefsValues !== null && careNeed.key in careNeedPrefsValues && careNeedPrefsValues[careNeed.key] !== null && (careNeedPrefsValues[careNeed.key] !== '' && careNeedPrefsValues[careNeed.key] !== 'none')){
        const temp = {name: careNeed.label, open: false, status: 'pending', configPathUrl: careNeed.configPathUrl, description: ''};
        if (!openFlag){
          if (configCareValues !== null && (careNeed.key in configCareValues) && configCareValues[careNeed.key] !== null && configCareValues[careNeed.key].length){
            temp.status = 'completed';
          }
          else{
            temp.status = 'active';
            temp.open = true;
            openFlag = true;
            this.activeItem = temp;
          }
        }
        this.stepperData.push(temp);
      }
    });
    this.validForm = !openFlag;
  }
  activateStepper(item){
    if (item.status !== 'pending'){
      if (this.activeItem){
        this.activeItem.open = false;
      }
      this.activeItem = item;
      item.open = true;
      // item.status = 'active';
    }
  }
  gotoUrl(path) {
    this.navCtrl.navigateForward(['/configcare/' + path]);
  }
}
