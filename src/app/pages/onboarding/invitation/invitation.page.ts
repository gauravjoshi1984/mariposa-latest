import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.page.html',
  styleUrls: ['./invitation.page.scss'],
})
export class InvitationPage implements OnInit {

  name="John";
  carecircle="David's Care Circle"
  selectedType = 'SENIOR';
  email = "daviddoe.father@gmail.com";

  constructor() { }

  ngOnInit() {
  }

}
