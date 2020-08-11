import { Component, OnInit } from '@angular/core';
import { AssessmentServiceService } from '../assessment-service.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-checkvitals',
  templateUrl: './checkvitals.page.html',
  styleUrls: ['./checkvitals.page.scss'],
})
export class CheckvitalsPage implements OnInit {
  constructor(private dataService: DataserviceService,
              private navCtrl: NavController,
              private assessmentService: AssessmentServiceService,
              private formBuilder: FormBuilder) { }
  checkVitalsForm: FormGroup;
  careCircleId;
  userId;
  stateObject;
  readyFlag = false;
  key: string;

  imageList = [];
  ngOnInit() {
  }

  save(){
    if (this.stateObject == null){
      this.stateObject = {};
    }
    this.stateObject[this.key] = this.checkVitalsForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });

  }

  changeToggle(key, ev: any) {
    this.checkVitalsForm.controls[key].setValue(ev);
  }

  async ionViewWillEnter(){
    this.readyFlag = false;
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    const key = this.key = 'VITALS';
    this.checkVitalsForm = new FormGroup({});

    this.assessmentService.getAssessmentStateObject().then((data) => {

      // first time load
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (this.stateObject != null && this.stateObject[key] != null){
        // data is present
        Object.keys(this.stateObject[key]).forEach((element: any) => {
          this.checkVitalsForm.addControl(element, new FormControl(this.stateObject[key][element]));
        });
      }
      else{
        // data is not present
        if (key in data.assessmentConfiguration.CARE_NEEDS){
          data.assessmentConfiguration.CARE_NEEDS[key].forEach(element => {
            this.checkVitalsForm.addControl(element, new FormControl());
          });
        }
        else{
          this.checkVitalsForm.addControl('seniorCheck', new FormControl(false));
        }
        this.checkVitalsForm.addControl('instructions', new FormControl());
      }
      this.readyFlag = true;
    });
  }

}
