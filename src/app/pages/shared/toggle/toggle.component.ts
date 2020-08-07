import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  @Input() name;
  @Input() value;

  @Output() result = new EventEmitter<boolean>();
  constructor() {
  }

  ngOnInit() {
  }
  toggleVal() {
    this.result.emit(this.value);
  }
  generateClick(ev: any) {
    // ev.click();
    if (ev.checked === true) {
      ev.checked = false;
    } else {
      ev.checked = true;
    }
  }
}
