import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-m-select',
  templateUrl: './m-select.component.html',
  styleUrls: ['./m-select.component.scss'],
})
export class MSelectComponent implements OnInit {
  @Input() placeholder = '';
  @Input() selectOptions = [];
  @Input() value;
  @Output() result = new EventEmitter<boolean>();
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log(this.selectOptions);
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: selectModelComponent,
      cssClass: 'mselectmodalclass',
      backdropDismiss: true,
      componentProps: { data: this.selectOptions },
    });
    modal.onDidDismiss().then((x: any) => {
      console.log(x.data.value);
      this.result.emit(x.data.value);
    });
    return await modal.present();
  }
  selectVal() {
    this.result.emit();
  }
}
@Component({
  selector: 'm-selectmodel',
  templateUrl: 'm-select-model.html',
})
export class selectModelComponent {
  @Input() data: any;
  constructor(private modalCtrl: ModalController) {}
  valueChange(ev: any) {
    console.log(ev);
    this.modalCtrl.dismiss({ value: ev.detail.value });
  }
}
