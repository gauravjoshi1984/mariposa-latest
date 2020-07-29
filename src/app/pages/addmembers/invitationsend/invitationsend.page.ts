import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitationsend',
  templateUrl: './invitationsend.page.html',
  styleUrls: ['./invitationsend.page.scss'],
})
export class InvitationsendPage implements OnInit {

  email = "mary.caregiver@gmail.com"

  constructor() { }

  ngOnInit() {
  }

}
