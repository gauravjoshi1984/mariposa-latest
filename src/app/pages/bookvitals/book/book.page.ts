import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { BookVitalsService } from '../book-vital.service';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { ProfilelistComponent } from '../profilelist/profilelist.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  showData = false;
  Cards: any = [];

  constructor(
    private dataService: DataserviceService,
    private bookVitalService: BookVitalsService,
    private navCtrl: NavController,
    private popoverCtrl: PopoverController) {}

  ngOnInit() {}
  toggleData() {
    this.showData = !this.showData;
  }
  async ionViewWillEnter(){
    this.dataService.setLastVisitedPage('/bookvitals/books');
    await this.loadPosts();
    this.showData = this.Cards.length > 0;
    window.addEventListener('updatePosts', () => {
      this.loadPosts();
    });
  }
  async loadPosts(){
    const posts: any = await this.bookVitalService.getPost();
    const { userId } = await this.dataService.getUserInfo();
    this.Cards = posts.map(post => (
      {...post, date: moment(post.createdDate).format('D'), month: moment(post.createdDate).format('MMM'), title: post.values.content, notes: post.values.content, liked: post.likes?.indexOf(userId) >= 0 }
    ));
  }
  async likepost(item) {
    item.liked = !item.liked;
    let type = '';
    if (item.liked){
      type = 'ADD';
    }
    else{
      type = 'REMOVE';
    }
    const response = await this.bookVitalService.editLike(item.postId, type);
    this.loadPosts();
  }
  commentPost(post){
    this.bookVitalService.setSelectedPost(post);
    this.navCtrl.navigateForward('/comments');
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ProfilelistComponent,
      cssClass: 'popoverstylepl',
      event: ev,
      translucent: true,
      mode: 'ios',
    });
    popover.onDidDismiss().then((x) => {
      // if (x.data === "delete") {
      // }
    });
    return await popover.present();
  }
}
