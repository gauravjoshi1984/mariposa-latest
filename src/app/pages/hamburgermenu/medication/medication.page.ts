import { Component, OnInit } from '@angular/core';
import { ConfigCareServiceService } from '../../configcare/config-care-service.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.page.html',
  styleUrls: ['./medication.page.scss'],
})
export class MedicationPage implements OnInit {
  type = 'all';
  medicationDetails;
  constructor(private configCareService: ConfigCareServiceService, ) {}

  medTable: any = [];

  ngOnInit() {}

  segmentChanged(ev: any) {
  }
  async ionViewWillEnter(){
    this.medicationDetails = (await this.configCareService.getConfigCareDetails()).configCareValues?.MEDICATION;
    console.log(this.medicationDetails);
    if (this.medicationDetails?.length){
      this.medTable = this.medicationDetails.map(item => (
        {
          name: item.name,
          dosage: item.dosage,
          timing : item.timeList.map(val => `${val.hours === 0 ? 12 : (val.hours > 12 ? val.hours % 12 : val.hours)}:${val.minutes.toString().padStart(2, '0')} ${val.hours >= 12 ? 'PM' : 'AM'}`),
          repeatDays: item.repeatDays,
          notes: item.instructions
        }
      ));
    }
  }
  filterItems(){
    const day = new Date().getDay();
    if (this.type === 'all'){
      return this.medTable;
    }
    else{
      return this.medTable.filter(item => item.repeatDays.indexOf(day) !== -1);
    }
  }
}
