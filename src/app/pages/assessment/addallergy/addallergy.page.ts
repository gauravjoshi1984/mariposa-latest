import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-addallergy',
  templateUrl: './addallergy.page.html',
  styleUrls: ['./addallergy.page.scss'],
})
export class AddallergyPage implements OnInit {

  addallergyForm: FormGroup;
  editFlag = false;
  key = 'medication';

  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService) {
      this.addallergyForm = this.formBuilder.group({
        medicineType: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        medicalinstructions: new FormControl('')
      });
    }

    medicinetype = ['Capsule', 'Tablet', 'Syrup'];
    imageList = [];

  ngOnInit() {
  }

  ionViewWillEnter(){
    const selectedMedicene = this.assessmentService.getAssessmentEditShared(this.key);
    if (selectedMedicene){
      this.editFlag = true;
      const {medicineType, name, medicalinstructions} = selectedMedicene.obj;
      this.imageList = selectedMedicene.obj.imageList ? selectedMedicene.obj.imageList : [];
      this.addallergyForm.setValue({medicineType, name, medicalinstructions});
    }
  }
  async addallergy(){
    const medicationType = 'allergy';
    const data = {...this.addallergyForm.value, imageList: this.imageList};
    // const data = {...this.addallergyForm.value};
    if (this.editFlag){
      const selectedMeal = this.assessmentService.getAssessmentEditShared(this.key);
      await this.assessmentService.setAssessmentEditShared(data, medicationType, this.key, selectedMeal.index);
    }
    else{
      await this.assessmentService.setAssessmentShared(data, medicationType, this.key);
    }
    this.navCtrl.back();
  }

}
