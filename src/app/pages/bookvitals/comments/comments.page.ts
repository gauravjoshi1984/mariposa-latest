import { Component, OnInit } from '@angular/core';
import { BookVitalsService } from '../book-vital.service';
import { NavController } from '@ionic/angular';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  username = '';
  dataLoaded = false;
  content = '';
  chatmessages: any = [];
  imageList  = [];
  postDate = '';
  commentText = '';
  activitylist = '';
  notes = ['This notes will be coming from care giver if she enters any specific'];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
    type: 'bullets',
      bulletClass: 'custombullet',
      bulletActiveClass: 'customactivebullet'
    }

  };
  selectedPost;
  constructor(
    private bookVitalService: BookVitalsService,
    private navCtrl: NavController,
    private dataService: DataserviceService
  ) { }

  ngOnInit() {
  }
  async ionViewWillEnter(){
    this.selectedPost = await this.bookVitalService.getSelectedPost();
    if (!this.selectedPost){
      this.navCtrl.back();
    }
    this.bookVitalService.setSelectedPost(null);
    this.chatmessages = this.selectedPost.comments ? this.selectedPost.comments : [];
    const userInfo = await this.dataService.getUserInfo();
    this.username = userInfo.userName;
    this.postDate = this.selectedPost.createdDate;
    this.content =  this.selectedPost.values.content;
    this.notes = this.selectedPost.notes ? this.selectedPost.notes : this.selectedPost.values.content;
    this.imageList = this.selectedPost.values.imageList;
  }
  addComment(){
    const commentObj = {comment: this.commentText, userId: this.selectedPost.createdBy, userName: this.username, time: new Date()};
    this.bookVitalService.editComment(this.selectedPost.postId, commentObj, 'ADD').then(response => {
      this.chatmessages.push(commentObj);
      window.dispatchEvent(new CustomEvent('updatePosts'));
      // this.navCtrl.back();
    });
  }
}
