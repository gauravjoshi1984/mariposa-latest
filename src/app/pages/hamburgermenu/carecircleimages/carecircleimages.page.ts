import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carecircleimages',
  templateUrl: './carecircleimages.page.html',
  styleUrls: ['./carecircleimages.page.scss'],
})
export class CarecircleimagesPage implements OnInit {
  careCircleList;
  constructor(private _dataService: DataserviceService,
              private _creatingCareService: CreatingcareService,
              private _apiService: ApiService,
              private navCtrl: NavController) { }

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
