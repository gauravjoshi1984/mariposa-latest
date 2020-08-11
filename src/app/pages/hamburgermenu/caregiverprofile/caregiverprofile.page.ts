import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caregiverprofile',
  templateUrl: './caregiverprofile.page.html',
  styleUrls: ['./caregiverprofile.page.scss'],
})
export class CaregiverprofilePage implements OnInit {

  caregiver = "Mary Arthur";

  selectedDays = ["Monday","Wednesday"];

  caregivertable = [
    {
      title:"Name",
      info:"Mary Arthur",
    },
    {
      title:"Gender",
      info:"Female",
    },
    {
      title:"Email",
      info:"Mary@gmail.com",
    },
    {
      title:"Mobile",
      info:"212 - 232 344 34",
    },
  ]

  daysList = [
    {
      name: 's',
      value: 'Sunday',
    },
    {
      name: 'm',
      value: 'Monday',
    },
    {
      name: 't',
      value: 'Tuesday',
    },
    {
      name: 'w',
      value: 'Wednesday',
    },
    {
      name: 't',
      value: 'Thursday',
    },
    {
      name: 'f',
      value: 'Friday',
    },
    {
      name: 's',
      value: 'Saturday',
    },
  ];
  


  constructor() { }

  ngOnInit() {
  }

  addremoveDay(item) {
    if (this.selectedDays.includes(item.value)) {
      const index = this.selectedDays.indexOf(item.value);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(item.value);
    }
  }

}
