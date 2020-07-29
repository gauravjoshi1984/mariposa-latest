import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.page.html',
  styleUrls: ['./medication.page.scss'],
})
export class MedicationPage implements OnInit {

  ccmedicineinfo=[

    {
      name:"Ibuprofine Mkal 100mg",
      frequency:"Daily",
      dosage:"#1",
      time:"10.00 PM",
    },
    {
      name:"Ibuprofine Mkal 100mg",
      frequency:"Daily",
      dosage:"#1",
      time:"10.00 PM",
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
