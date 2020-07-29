import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notificationsettings',
  templateUrl: './notificationsettings.page.html',
  styleUrls: ['./notificationsettings.page.scss'],
})
export class NotificationsettingsPage implements OnInit {

  
  toggleList = [{label:"Push Notification"},
                {label:"Email Notification"},
                {label:"In App Notification"}
              
              ];

  

  constructor() { }

  ngOnInit() {
  }

}
