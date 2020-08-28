import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  username = "john";

  chatmessages = [
    {
      name:"David Doe",
      message:"Had fun at the LA Garden",
      imgurl:"assets/chatimages/senior.png",
    },
    {
      name:"John Doe",
      message:"Good to hear that Dad",
    },
  ]

  activitylist = ["Bathing", "Breakfast", "Medication:Ibuprofine", " Lunch", "Snack", "Exercise",
    "Dinner", "Medication: ABCD Vitamin Syrup"]
  
  notes = ["This notes will be coming from care giver if she enters any specific"]  

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
