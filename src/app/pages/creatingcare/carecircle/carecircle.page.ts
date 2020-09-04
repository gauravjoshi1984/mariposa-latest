import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../creatingcare.service';
import { ApiService } from 'src/app/http.service';
import { NavController , PopoverController , ModalController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-carecircle',
  templateUrl: './carecircle.page.html',
  styleUrls: ['./carecircle.page.scss'],
})
export class CarecirclePage implements OnInit {
  memberList;
  careCircleName;
  assessmentBtnText = 'START ASSESSMENT';
  assessmentData: any = {};
  constructor(private _dataService: DataserviceService,
              private _creatingCareService: CreatingcareService,
              private apiService: ApiService,
              public popoverController: PopoverController,
              public modalController: ModalController,
              private navCtrl: NavController) {
  }
  navigateToAddMember(){
    this.navCtrl.navigateForward(['carecircle/addmembers']);
  }
  async populateMemberList() {
    const careCircleId = await this._creatingCareService.getCareCircleID();
    const userInfo = await this._dataService.getUserInfo();
    this.assessmentData = await this.apiService.get('assessment', {careCircleId, userId: userInfo.userId });
    if (this.assessmentData.assessmentValues.CARE_NEED_PREFS !== null){
      this.assessmentBtnText = 'CONTINUE ASSESSMENT';
    }
    this.apiService.get('careCircle/' + careCircleId, {}).then((data: any) => {
      if (data){
        this.memberList = data.members;
        this._creatingCareService.setCareCircleDetails(data);
      }
      else{
        console.log(data);
      }
    });
  }
  async ionViewWillEnter(){
    this.careCircleName = await this._creatingCareService.getCareCircleName();
    this.populateMemberList();
  }

  back(){
    this.navCtrl.back();
  }
  navigateToAssessment(){
    // this._dataService.setLastVisitedPage('/assessment');
    this.navCtrl.navigateForward(['/assessment']);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'popoverstyle',
      event: ev,
      translucent: true,
      mode: 'ios',
    });
    popover.onDidDismiss().then((result) => {
      console.log(result);
    });
    return await popover.present();
  }
  ngOnInit() {

  }
}
