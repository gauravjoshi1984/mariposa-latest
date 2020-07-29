import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pushtoggle',
  templateUrl: './pushtoggle.component.html',
  styleUrls: ['./pushtoggle.component.scss'],
})
export class PushtoggleComponent implements OnInit {

  @Input() name = '';

  @Output() result = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  generateClick(ev: any) {
    if (ev.checked === true) {
      ev.checked = false;
    } else {
      ev.checked = true;
    }
  }

}
