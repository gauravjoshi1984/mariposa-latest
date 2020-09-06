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
  scheduleAdded = false;
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
    const currentDate = moment().format('YYYY-MM-DD');
    const posts: any = await this.bookVitalService.getPost();
    const { userId } = await this.dataService.getUserInfo();
    this.Cards = posts.map(post => {
      if (post.postType === 'SCHEDULE' && post.postDate === currentDate){
        this.scheduleAdded = true;
      }
      return {...post, date: moment(post.createdDate).format('D'), month: moment(post.createdDate).format('MMM'),
      title: post.values.content,
      notes: post.values.notes ? post.values.notes : post.values.content,
      liked: post.likes?.indexOf(userId) >= 0 };
    });
  }
  async likepost(event, item) {
    event.stopPropagation();
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
  commentPost(event, post){
    event.stopPropagation();
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
  viewPost(post){
    this.bookVitalService.setSelectedPost(post);
    if (post.postType === 'SCHEDULE' && post.values.status === 'IN_PROGRESS'){
      this.navCtrl.navigateForward('/bookvitals/updateschedule');
    }
    else{
      this.navCtrl.navigateForward('/bookvitals/bookdetailedview');
    }
  }
  getProgressIcon(post){
    if (post.postType === 'SCHEDULE'){
      if (post.values.status === 'IN_PROGRESS'){
        return 'progress_pending.svg';
      }
      else{
        return 'progress_done.svg';
      }
    }
    else{
      return 'progress_done.svg';
    }
  }
}
