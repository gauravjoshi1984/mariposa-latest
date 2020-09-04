import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.page.html',
  styleUrls: ['./add-medication.page.scss'],
})
export class AddMedicationPage implements OnInit {
  addMedicationForm: FormGroup;
  stateObject;
  editFlag = false;
  key = 'medication';
  category = 'MEDICATION';
  formData: any = {};
  careCircleId;
  userId;
  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService) {
      this.addMedicationForm = this.formBuilder.group({
        medicineType: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        medicalinstructions: new FormControl('')
      });
    }

    medicinetype = ['Capsule', 'Tablet', 'Syrup', 'Other'];
    imageList = [];

  ngOnInit() {
  }

  async ionViewWillEnter(){
    const selectedMedicene = this.assessmentService.getAssessmentEditShared(this.key);
    if (selectedMedicene){
      this.editFlag = true;
      const {medicineType, name, medicalinstructions} = selectedMedicene.obj;
      this.imageList = selectedMedicene.obj.imageList ? selectedMedicene.obj.imageList : [];
      this.addMedicationForm.setValue({medicineType, name, medicalinstructions});
    }
    const data = await this.assessmentService.getAssessmentStateObject();
    if (data.assessmentValues.CARE_NEEDS){
      this.stateObject = data.assessmentValues.CARE_NEEDS;
      if (this.stateObject != null && this.stateObject[this.category] != null){
        this.formData = this.stateObject[this.category];
      }
    }
  }
  async addMedication(){
    const medicationType = 'medication';
    const data = {...this.addMedicationForm.value, imageList: this.imageList};
    // const data = {...this.addMedicationForm.value};
    if (this.editFlag){
      const selectedMeal = this.assessmentService.getAssessmentEditShared(this.key);
      await this.assessmentService.setAssessmentEditShared(data, medicationType, this.key, selectedMeal.index);
    }
    else{
      if (!(medicationType in this.formData)){
        this.formData[medicationType] = [];
      }
      this.formData[medicationType].push(data);
      this.stateObject[this.category] = this.formData;
      this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
        this.navCtrl.back();
      });
      // await this.assessmentService.setAssessmentShared(data, medicationType, this.key);
    }
  }
}
