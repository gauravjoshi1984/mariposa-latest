import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-deleteassesmentmodal',
  templateUrl: './deleteassesmentmodal.component.html',
  styleUrls: ['./deleteassesmentmodal.component.scss'],
})
export class DeleteassesmentmodalComponent implements OnInit {
  @Input() careCircleName;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  closemodal(status= null){
    this.modalCtrl.dismiss(status);
  }
}
