import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-addvital",
  templateUrl: "./addvital.component.html",
  styleUrls: ["./addvital.component.scss"],
})
export class AddvitalComponent implements OnInit {
  @Input() title: string;
  Systolic: any;
  Diastolic: any;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  submit() {
    this.modalCtrl.dismiss({
      Systolic: this.Systolic,
      Diastolic: this.Diastolic,
    });
  }
  dismiss() {
    this.modalCtrl.dismiss({});
  }
}
