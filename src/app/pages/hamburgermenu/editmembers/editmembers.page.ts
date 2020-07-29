import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editmembers',
  templateUrl: './editmembers.page.html',
  styleUrls: ['./editmembers.page.scss'],
})
export class EditmembersPage implements OnInit {

  senior = "David";
  isAdmin = false;

  memberdetails = [
    {
      membername : "David",
      memberrelation : "Father",
      memberrank : "SENIOR",
      details : "70 Years Old, Male, lives with",
    },
    {
      membername : "David",
      memberrelation : "Father",
      memberrank : "ADMIN",
      details : "70 Years Old, Male, lives with",
    }
]


  constructor() { }

  ngOnInit() {
  }

}
