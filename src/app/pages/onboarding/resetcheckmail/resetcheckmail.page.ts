import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetcheckmail',
  templateUrl: './resetcheckmail.page.html',
  styleUrls: ['./resetcheckmail.page.scss'],
})
export class ResetcheckmailPage implements OnInit {

  constructor() { }

  email = "john***@gmail.com";

  ngOnInit() {
  }

}
