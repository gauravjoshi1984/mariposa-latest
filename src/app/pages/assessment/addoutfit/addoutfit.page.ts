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
  careCircleId;
  userId;
  stateObject;
  addOutfitForm: FormGroup;
  editFlag = false;
  key = 'outfit';

  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private assessmentService: AssessmentServiceService,
              private dataService: DataserviceService) {
      this.addOutfitForm = this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        instructions: new FormControl('')
      });
    }
    imageList = [];

  ngOnInit() {
  }
  async ionViewWillEnter(){
    const selectedOutfit = this.assessmentService.getAssessmentEditShared(this.key);
    if (selectedOutfit){
      this.editFlag = true;
      const { name, instructions} = selectedOutfit.obj;
      this.imageList = selectedOutfit.obj.imageList ? selectedOutfit.obj.imageList : [];
      this.addOutfitForm.setValue({name, instructions});
    }
  }
  async addoutfit(){
    const data = {...this.addOutfitForm.value, imageList: this.imageList};
    // const data = {...this.addOutfitForm.value};
    if (this.editFlag){
      const selectedOutfit = this.assessmentService.getAssessmentEditShared(this.key);
      await this.assessmentService.setAssessmentEditShared(data, null, this.key, selectedOutfit.index);
    }
    else{
      await this.assessmentService.setAssessmentShared(data, null, this.key);
    }
    this.navCtrl.back();
  }
}
