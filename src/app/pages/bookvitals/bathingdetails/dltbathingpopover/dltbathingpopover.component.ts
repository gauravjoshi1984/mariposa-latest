import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-dltbathingpopover',
  templateUrl: './dltbathingpopover.component.html',
  styleUrls: ['./dltbathingpopover.component.scss'],
})
export class DltbathingpopoverComponent implements OnInit {
  popoverCntrl: PopoverController;

  constructor() { }

  ngOnInit() {}

  delete(){
    this.popoverCntrl.dismiss('delete');

  }

}
