import { Component, OnInit } from '@angular/core';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.page.html',
  styleUrls: ['./adminprofile.page.scss'],
})
export class AdminprofilePage implements OnInit {
  member;

  constructor(private _creatingCareService: CreatingcareService) { }

  ngOnInit() {
  }
  async ionViewWillEnter(){
    this.member = await this._creatingCareService.getSelectedMember();
  }

}
