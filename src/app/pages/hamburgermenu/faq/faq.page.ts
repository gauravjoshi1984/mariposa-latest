import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  faqlist = [
    {question : 'How do you invite Care Giver ?',
     answer   : 'Please go to Hamburger Menu > Invite then please select Care Giver and fill details and click on send invite. Once care giver recieves invitation, care giver should authenticate email address and proceed to mariposa Note: This is sample text for a place holder',
     show: false,
     color: 'transparent'
    },
    {question : 'How do you invite Care Giver ?',
     answer   : 'Please go to Hamburger Menu > Invite then please select Care Giver and fill details and click on send invite. Once care giver recieves invitation, care giver should authenticate email address and proceed to mariposa Note: This is sample text for a place holder',
     show: false,
     color: 'transparent'
    }
  ];

  show(item){
    item.show = !item.show;
    item.color = item.show ? 'blue' : 'transparent';
  }

  constructor() { }

  ngOnInit() {
  }

}
