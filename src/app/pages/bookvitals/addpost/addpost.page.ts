import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { BookVitalsService } from '../book-vital.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
})
export class AddpostPage implements OnInit {

  date = moment().format('LL');
  imageList = [];
  content = '';
  constructor(
    private navCtrl: NavController,
    private bookVitalService: BookVitalsService) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.back();
  }
  async addPost(){
    const response = await this.bookVitalService.addPost('POST', {content: this.content, imageList: this.imageList});
    window.dispatchEvent(new CustomEvent('updatePosts'));
    this.navCtrl.back();
  }
}
