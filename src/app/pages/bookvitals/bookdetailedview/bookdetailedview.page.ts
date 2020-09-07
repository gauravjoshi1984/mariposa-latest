import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BookVitalsService } from '../book-vital.service';

@Component({
  selector: 'app-bookdetailedview',
  templateUrl: './bookdetailedview.page.html',
  styleUrls: ['./bookdetailedview.page.scss'],
})
export class BookdetailedviewPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
    type: 'bullets',
      bulletClass: 'custombullet',
      bulletActiveClass: 'customactivebullet'
    }

  };
  selectedPost;
  loaded = false;
  constructor(
    private bookVitalService: BookVitalsService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  objectKeys(obj){
    if (obj){
      return Object.keys(obj);
    }
    else{
      return [];
    }
  }
  back(){
    this.navCtrl.back();
  }
  async ionViewWillEnter(){
    this.selectedPost = await this.bookVitalService.getSelectedPost();
    if (!this.selectedPost){
      this.navCtrl.back();
      return;
    }
    this.bookVitalService.setSelectedPost(null);
    this.loaded = true;
  }
  concatValues(arr){
    return arr.map(val => val.valueStr).join(', ');
  }
}
