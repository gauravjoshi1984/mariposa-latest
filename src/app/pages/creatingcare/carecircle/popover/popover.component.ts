import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private popoverCntrl: PopoverController) { }

  ngOnInit() {}

  selectOption(option){
    this.popoverCntrl.dismiss(option);
  }

}
