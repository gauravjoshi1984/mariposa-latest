import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-deleteassesmentmodal',
  templateUrl: './deleteassesmentmodal.component.html',
  styleUrls: ['./deleteassesmentmodal.component.scss'],
})
export class DeleteassesmentmodalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  closemodal(){
    this.modalCtrl.dismiss();
  }

}
