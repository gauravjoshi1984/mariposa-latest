import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletemedicine',
  templateUrl: './deletemedicine.page.html',
  styleUrls: ['./deletemedicine.page.scss'],
})
export class DeletemedicinePage implements OnInit {

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
