import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-addmedication',
  templateUrl: './addmedication.page.html',
  styleUrls: ['./addmedication.page.scss'],
})
export class AddmedicationPage implements OnInit {

  addmedicationForm: FormGroup;
  editFlag = false;

  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService) { 

                this.addmedicationForm = this.formBuilder.group({
                  medicineType: new FormControl('', [Validators.required]),
                  name: new FormControl('', [Validators.required]),
                  medicalinstructions: new FormControl('')
                });
              }

    medicinetype = ['Capsule', 'Tablet', 'Syrup'];
    imageList = [];

  ngOnInit() {
  }

  async addmedication(){
    
    this.navCtrl.back();
  }

}
