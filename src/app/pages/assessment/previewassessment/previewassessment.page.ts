import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previewassessment',
  templateUrl: './previewassessment.page.html',
  styleUrls: ['./previewassessment.page.scss'],
})
export class PreviewassessmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changeToggle(ev: any) {
    console.log(ev);
  }

}
