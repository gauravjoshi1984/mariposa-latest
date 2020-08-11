import { FormControl, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-oralcare',
  templateUrl: './oralcare.page.html',
  styleUrls: ['./oralcare.page.scss'],
})
export class OralcarePage implements OnInit {
  oralForm: FormGroup;
  imageList = [];
  stateObject: any = {};
  careCircleId;
  userId;
  key;
  toothpasteOptions = [];
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private assessmentService: AssessmentServiceService,
    private dataService: DataserviceService, ) {
      this.oralForm = this.formBuilder.group({
        toothpaste: new FormControl('', [Validators.required]),
        toothSensitivity : new FormControl('', [Validators.required]),
        instructions: new FormControl('')
      });
    }

  ngOnInit() {
  }

  save(){
    console.log(this.oralForm);
    if (this.stateObject == null){
      this.stateObject = {};
    }
    // this.formData.imageList = this.imageList;
    this.stateObject[this.key] = this.oralForm.value;
    this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
      this.navCtrl.back();
    });
  }

  changeToggle(ev: any) {
    this.oralForm.controls.toothSensitivity.setValue(ev);
  }
  async ionViewWillEnter(){
    this.careCircleId = await this.assessmentService.getCareCircleId();
    this.userId = await this.dataService.getUserInfo();
    this.userId = this.userId.userId;
    this.key = 'ORAL';
    const data = await this.assessmentService.getAssessmentStateObject();
    this.stateObject = data.assessmentValues.CARE_NEEDS;
    this.toothpasteOptions = data.assessmentConfiguration.CARE_NEEDS[this.key].toothpaste;
    if (this.stateObject != null && this.stateObject[this.key] != null){
      Object.keys(this.stateObject[this.key]).forEach(key => {
        console.log(key, this.stateObject[this.key][key]);
        this.oralForm.controls[key].setValue(this.stateObject[this.key][key]);
      });
    }
  }
}
