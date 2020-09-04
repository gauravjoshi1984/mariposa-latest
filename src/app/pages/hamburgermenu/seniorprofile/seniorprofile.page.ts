import { Component, OnInit } from '@angular/core';
import {
  ImagePickerOptions,
  ImagePicker,
} from '@ionic-native/image-picker/ngx';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { DataserviceService } from '../../dataservice.service';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seniorprofile',
  templateUrl: './seniorprofile.page.html',
  styleUrls: ['./seniorprofile.page.scss'],
})
export class SeniorprofilePage implements OnInit {
  senior = 'david doe';
  // limitInfoTable = false;
  member;
  assessmentData;
  showhhide = {
    limitInfoTable: false,
    careneeds: false,
    medical: false,
    homesafty: false,
  };
  infotable = [
    {
      title: 'First Name',
      info: 'David',
      key: 'firstName'
    },
    {
      title: 'Last Name',
      info: 'Doe',
      key: 'lastName'
    },
    {
      title: 'Gender',
      info: 'Male',
      key: 'gender'
    },
    {
      title: 'Date of Birth',
      info: '24 March 1958',
      key: 'dob'
    },
    {
      title: 'Lives with',
      info: 'Spouse',
      key: 'livesWith'
    },
    {
      title: 'Past Profession',
      info: 'Rtd. Navy Officer',
      key: 'pastProfession'
    },
    {
      title: 'Address',
      info: 'New York',
      key: 'address'
    },
    {
      title: 'Zipcode',
      info: '30040',
      key: 'zipCode'
    },
    {
      title: 'Country',
      info: 'USA',
      key: 'country'
    },
    {
      title: 'City',
      info: 'New York',
      key: 'city'
    },
    {
      title: 'Emergency Contact Person Name',
      info: 'John',
      key: 'emergencyContactPerson'
    },
    {
      title: 'Emergency Contact Number',
      info: '212 234 45 534',
      key: 'emergencyContactNumber'
    },
  ];

  careneedstable = [
    {
      title: 'Companionship',
      info: 'Yes',
    },
    {
      title: 'Exercise / PT',
      info: 'No',
    },
    {
      title: 'hopping/Errands',
      info: 'Yes',
    },
    {
      title: 'Electronics Use',
      info: 'Yes',
    },
    {
      title: 'Gardening',
      info: 'Yes',
    },
  ];

  medicaltable = [
    {
      title: 'Diagnosed disorders / Medications',
      info: 'No',
    },
    {
      title: 'Past or current Substance Abuse',
      info: 'No',
    },
    {
      title: 'Depression',
      info: 'No',
    },
  ];

  hometable = [
    {
      title: 'Home Safety Assessment Done',
      info: 'Some Assistance needed',
    },
    {
      title: 'Interested in lifeline',
      info: 'No',
    },
    {
      title: 'Others',
      info: 'Bedrails, Grab bars',
    },
  ];

  shoppinglist: any = [];

  constructor(
    private imagePicker: ImagePicker,
    private _creatingCareService: CreatingcareService,
    private _dataService: DataserviceService,
    private apiService: ApiService,
    private navCtrl: NavController) {}

  async ionViewWillEnter(){
    const careCircleId = await this._creatingCareService.getCareCircleID();
    const userInfo = await this._dataService.getUserInfo();
    this.assessmentData = await this.apiService.get('assessment', {careCircleId, userId: userInfo.userId });
    this.shoppinglist = this.assessmentData.assessmentValues.CARE_NEEDS.SHOPPING;
    const careNeedPrefsValues = this.assessmentData.assessmentValues.CARE_NEED_PREFS;
    const careNeedsPrefs = this.assessmentData.assessmentConfiguration.CARE_NEED_PREFS.options;
    this.member = await this._creatingCareService.getSelectedMember();
    this.member.dob = `${new Date(this.member.dobYear).getFullYear()}-${new Date(this.member.dobMonth).getMonth() + 1}-${new Date(this.member.dobDate).getDate()}`;
    this.careneedstable = careNeedsPrefs.filter(item => item.assessment).map(obj =>
      ({title: obj.label, info: careNeedPrefsValues[obj.key] === 'none' ? 'No' : 'Yes'})
      );
  }
  ngOnInit() {}
  addImage() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
    };
    this.imagePicker.getPictures(options).then(
      (results) => {
      },
      (err) => {}
    );
  }
  viewMore(i, index, array) {
    if (array.length != index + 1) {
      this.showhhide[i] = !this.showhhide[i];
    }
  }
}
