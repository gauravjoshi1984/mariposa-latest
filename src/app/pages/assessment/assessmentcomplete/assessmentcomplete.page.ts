import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

@Component({
  selector: 'app-assessmentcomplete',
  templateUrl: './assessmentcomplete.page.html',
  styleUrls: ['./assessmentcomplete.page.scss'],
})
export class AssessmentcompletePage implements OnInit {

  careCircleName: string;
  constructor(
    private navCtrl: NavController,
    private _creatingCareService: CreatingcareService) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.back();
  }
  async ionViewWillEnter(){
    this.careCircleName = await this._creatingCareService.getCareCircleName();
  }
  goToConfigureCare(){
    this.navCtrl.navigateForward(['/configcare/configurecarebar']);
  }
}
