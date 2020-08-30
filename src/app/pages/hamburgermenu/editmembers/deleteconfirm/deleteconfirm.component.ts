import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-deleteconfirm",
  templateUrl: "./deleteconfirm.component.html",
  styleUrls: ["./deleteconfirm.component.scss"],
})
export class DeleteconfirmComponent implements OnInit {
  @Input() careCircleName;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  closemodal(status = null) {
    this.modalCtrl.dismiss(status);
  }
}
