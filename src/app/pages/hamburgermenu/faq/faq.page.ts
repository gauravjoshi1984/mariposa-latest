import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  show1 : boolean = false;
  color : string = 'transparent';

  faqlist = [
    {question : "How do you invite Care Giver ?",
     answer   : "Please go to Hamburger Menu > Invite then please select Care Giver and fill details and click on send invite. Once care giver recieves invitation, care giver should authenticate email address and proceed to mariposa Note: This is sample text for a place holder", 
    },
    {question : "How do you invite Care Giver ?",
     answer   : "Please go to Hamburger Menu > Invite then please select Care Giver and fill details and click on send invite. Once care giver recieves invitation, care giver should authenticate email address and proceed to mariposa Note: This is sample text for a place holder", 
    }
  ]

  show(){
    
    if(this.show1 == false)
    {
      this.show1 = true;
      this.color = "blue" ;
    }
    else if(this.show1 == true){
      this.show1 = false;
      this.color = "transparent" ;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
