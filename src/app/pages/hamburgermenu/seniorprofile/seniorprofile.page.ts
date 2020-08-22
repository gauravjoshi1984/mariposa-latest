import { Component, OnInit } from "@angular/core";
import {
  ImagePickerOptions,
  ImagePicker,
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: "app-seniorprofile",
  templateUrl: "./seniorprofile.page.html",
  styleUrls: ["./seniorprofile.page.scss"],
})
export class SeniorprofilePage implements OnInit {
  senior = "david doe";

  infotable = [
    {
      title: "First Name",
      info: "David",
    },
    {
      title: "Last Name",
      info: "Doe",
    },
  ];

  careneedstable = [
    {
      title: "Companionship",
      info: "Yes",
    },
    {
      title: "Exercise / PT",
      info: "No",
    },
  ];

  medicaltable = [
    {
      title: "Diagnosed disorders / Medications",
      info: "No",
    },
    {
      title: "Past or current Substance Abuse",
      info: "No",
    },
    {
      title: "Depression",
      info: "No",
    },
  ];

  hometable = [
    {
      title: "Home Safety Assessment Done",
      info: "Some Assistance needed",
    },
    {
      title: "Interested in lifeline",
      info: "No",
    },
    {
      title: "Others",
      info: "Bedrails, Grab bars",
    },
  ];

  shoppinglist = [
    {
      item: "Tissue Roll",
      brand: "Quality Brand",
    },
    {
      item: "Tooth Paste",
      brand: "Pepsodent",
    },
    {
      item: "Milk Tin",
      brand: "Heritage",
    },
  ];

  constructor(private imagePicker: ImagePicker) {}

  ngOnInit() {}
  addImage() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
    };
    this.imagePicker.getPictures(options).then(
      (results) => {
        console.log(results);
      },
      (err) => {}
    );
  }
}
