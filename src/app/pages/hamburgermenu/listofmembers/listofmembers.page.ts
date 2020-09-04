import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listofmembers',
  templateUrl: './listofmembers.page.html',
  styleUrls: ['./listofmembers.page.scss'],
})
export class ListofmembersPage implements OnInit {

  member = 'David';
  memberrelation = 'Father';
  memberrank = 'SENIOR';
  details = '70 Years Old, Male, lives with';
  careCircleName;
  memberdetails;
  assessmentData;
  constructor(
    private _dataService: DataserviceService,
    private _creatingCareService: CreatingcareService,
    private apiService: ApiService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  presentPopover(ev){

  }
  async populateMemberList() {
    const careCircleId = await this._creatingCareService.getCareCircleID();
    const userInfo = await this._dataService.getUserInfo();
    this.assessmentData = await this.apiService.get('assessment', {careCircleId, userId: userInfo.userId });
    this.apiService.get('careCircle/' + careCircleId, {}).then((data: any) => {
      if (data){
        this.memberdetails = data.members;
        this._creatingCareService.setCareCircleDetails(data);
      }
    });
  }
  async ionViewWillEnter(){
    this.careCircleName = await this._creatingCareService.getCareCircleName();
    this.populateMemberList();
  }
  async viewProfile(member){
    if (member.userType === 'ADMIN'){
      await this._creatingCareService.setSelectedMember(member);
      this.navCtrl.navigateForward('/menu/adminprofile');
    }
    else if (member.userType === 'CAREGIVER'){
      await this._creatingCareService.setSelectedMember(member);
      this.navCtrl.navigateForward('/menu/caregiverprofile');
    }
    else if (member.userType === 'SENIOR'){
      await this._creatingCareService.setSelectedMember(this.assessmentData.assessmentValues.PERSONAL_INFORMATION);
      this.navCtrl.navigateForward('/menu/seniorprofile');
    }
  }
}
