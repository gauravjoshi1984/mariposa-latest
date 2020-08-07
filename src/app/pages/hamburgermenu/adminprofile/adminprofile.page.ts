import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.page.html',
  styleUrls: ['./adminprofile.page.scss'],
})
export class AdminprofilePage implements OnInit {

  admintable = [
    {
      title:"Name",
      info:"John Doe",
    },
    
    {
      title:"Email",
      info:"john.doe@gmail.com",
    },
    {
      title:"Mobile",
      info:"212 1234 543",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
