import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofmembers',
  templateUrl: './listofmembers.page.html',
  styleUrls: ['./listofmembers.page.scss'],
})
export class ListofmembersPage implements OnInit {

  member = 'David';
  memberrelation = 'Father';
  memberrank = 'SENIOR';
  details = '70 Years Old, Male, lives with';

  memberdetails = [
      {
        membername : 'David',
        memberrelation : 'Father',
        memberrank : 'SENIOR',
        details : '70 Years Old, Male, lives with',
      },
      {
        membername : 'David',
        memberrelation : 'Father',
        memberrank : 'SENIOR',
        details : '70 Years Old, Male, lives with',
      }
];

  constructor() { }

  ngOnInit() {
  }
  presentPopover(ev){

  }
}
