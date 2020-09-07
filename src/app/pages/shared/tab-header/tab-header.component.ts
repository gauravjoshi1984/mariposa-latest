import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataserviceService } from "../../dataservice.service";
import { CreatingcareService } from "../../creatingcare/creatingcare.service";
import { ConfigCareServiceService } from "../../configcare/config-care-service.service";
import { PopoverController } from "@ionic/angular";
import { ProfilelistComponent } from "../../bookvitals/profilelist/profilelist.component";

@Component({
  selector: "app-tab-header",
  templateUrl: "./tab-header.component.html",
  styleUrls: ["./tab-header.component.scss"],
})
export class TabHeaderComponent implements OnInit {
  @Input() page: string;
  @Output() getData = new EventEmitter<any>();
  @Output() getDataVital = new EventEmitter<any>();
  segValue = "activities";
  userInfo: any = {};
  configCareDetails;
  showData = true;
  segmentVar = "addvitals";

  constructor(
    private dataService: DataserviceService,
    private _creatingCareService: CreatingcareService,
    private configCareService: ConfigCareServiceService,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    // this.page
    console.log("TabHeaderComponent -> ngOnInit -> this.page", this.page);
    this.ionViewDidEnter();
  }
  async ionViewDidEnter() {
    this.userInfo = await this.getUserinfo();
    console.log(
      "TabHeaderComponent -> ionViewWillEnter -> this.userInfo",
      this.userInfo
    );
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    console.log(this.configCareDetails);
  }
  changevital(ev: any) {
    this.getDataVital.emit(ev.detail.value);
  }
  changecal(ev: any) {
    console.log(ev);
    this.getData.emit(ev.detail.value);
  }
  async getUserinfo() {
    const userData = await this.dataService.getUserInfo();
    const tmp = await this._creatingCareService.getCareCircleDetails();
    const members = tmp && tmp.members ? tmp.members : null;
    // debugger;
    const user = members.find(member => member.userId === userData.userId);
    // const user = {
    //   userType: "SENIOR",
    // };
    return user;
  }
  toggleData() {
    this.showData = !this.showData;
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ProfilelistComponent,
      cssClass: "popoverstylepl",
      event: ev,
      translucent: true,
      mode: "ios",
    });
    popover.onDidDismiss().then((x) => {
      // if (x.data === "delete") {
      // }
    });
    return await popover.present();
  }
}
