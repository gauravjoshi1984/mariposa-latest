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

  async addallergy(){
    
    this.navCtrl.back();
  }

}
