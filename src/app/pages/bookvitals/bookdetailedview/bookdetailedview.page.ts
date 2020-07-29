import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdetailedview',
  templateUrl: './bookdetailedview.page.html',
  styleUrls: ['./bookdetailedview.page.scss'],
})
export class BookdetailedviewPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    pagination:{
      el: '.swiper-pagination',
    type: 'bullets',
      bulletClass:'custombullet',
      bulletActiveClass:'customactivebullet'
    }
    
  };

  constructor() { }

  ngOnInit() {
  }

}
