import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../creatingcare.service';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-showcarecircle',
  templateUrl: './showcarecircle.page.html',
  styleUrls: ['./showcarecircle.page.scss'],
})
export class ShowcarecirclePage implements OnInit {
  careCircleList;
  constructor(private _dataService: DataserviceService,
              private _creatingCareService: CreatingcareService,
              private _apiService: ApiService,
              private navCtrl: NavController) {
  }
  async populateCareCircle(){
    const userData = await this._dataService.getUserInfo();
    this._apiService.get('getCareCircles', {userId: userData.userId}).then((data: any) => {
      this.careCircleList = data;
      this._creatingCareService.setAvailableCareCircleDetails(data);
    });
  }

  careCircleDetails(careCircleId, careCircleName) {
    this._creatingCareService.setCareCircleId(careCircleId);
    this._creatingCareService.setCareCircleName(careCircleName);
    this.navCtrl.navigateForward(['carecircle/list']);
  }

  back(){
    this.navCtrl.back();
  }

  ngOnInit() {
  }
  async ionViewWillEnter(){
    this.populateCareCircle();
  }
  createCareCircle(){
    this._dataService.setLastVisitedPage('carecircle/showcarecircle');
    this.navCtrl.navigateForward(['/carecircle']);
  }
  getMemberNames(members){
    return members.map((member) => member.userName).join(', ');
  }
}
