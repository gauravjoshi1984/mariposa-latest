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
  constructor(private _dataService: DataserviceService,
              private _creatingCareService: CreatingcareService,
              public popoverController: PopoverController,
              public modalController: ModalController,
              private _apiService: ApiService,
              private navCtrl: NavController) {
  }
  navigateToAddMember(){
    this.navCtrl.navigateForward(['carecircle/addmembers']);
  }
  async populateMemberList() {
    const careCircleId = await this._creatingCareService.getCareCircleID();
    this._apiService.get('careCircle/' + careCircleId, {}).then((data: any) => {
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
