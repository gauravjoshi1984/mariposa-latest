import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
})
export class AddpostPage implements OnInit {

  date="19th January' 20";
  imageList = [];

  constructor() { }

  ngOnInit() {
  }

}
