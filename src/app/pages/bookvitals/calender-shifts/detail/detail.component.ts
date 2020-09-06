import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() data: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log(this.data);
  }
  goBack(event) {
    this.modalCtrl.dismiss();
  }
}
