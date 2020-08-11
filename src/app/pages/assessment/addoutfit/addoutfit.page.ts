import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AssessmentServiceService } from '../assessment-service.service';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-addoutfit',
  templateUrl: './addoutfit.page.html',
  styleUrls: ['./addoutfit.page.scss'],
})
export class AddoutfitPage implements OnInit {

  addOutfitForm: FormGroup;
  editFlag = false;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private assessmentService: AssessmentServiceService,
    private dataService: DataserviceService) { 
      this.addOutfitForm = this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        outfitinstructions: new FormControl('')
      });
    }

    imageList = [];

  ngOnInit() {
  }

  async addoutfit(){
    
    this.navCtrl.back();
  }

}
