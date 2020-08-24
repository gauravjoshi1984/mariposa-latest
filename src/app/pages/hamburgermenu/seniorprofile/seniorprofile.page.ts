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
  // limitInfoTable = false;
  showhhide = {
    limitInfoTable: false,
    careneeds: false,
    medical: false,
    homesafty: false,
  };
  infotable = [
    {
      title: "First Name",
      info: "David",
    },
    {
      title: "Last Name",
      info: "Doe",
    },
    {
      title: "Gender",
      info: "Male",
    },
    {
      title: "Date of Birth",
      info: "24 March 1958",
    },
    {
      title: "Lives with",
      info: "Spouse",
    },
    {
      title: "Past Profession",
      info: "Rtd. Navy Officer",
    },
    {
      title: "Address",
      info: "New York",
    },
    {
      title: "Zipcode",
      info: "30040",
    },
    {
      title: "Country",
      info: "USA",
    },
    {
      title: "City",
      info: "New York",
    },
    {
      title: "Emergency Contact Person Name",
      info: "John",
    },
    {
      title: "Emergency Contact Number",
      info: "212 234 45 534",
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
    {
      title: "hopping/Errands",
      info: "Yes",
    },
    {
      title: "Electronics Use",
      info: "Yes",
    },
    {
      title: "Gardening",
      info: "Yes",
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
    {
      item: "Washing Detergent",
      brand: "Quality Brand",
    },
    {
      item: "Perfume",
      brand: "Park Avenue",
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
  viewMore(i, index, array) {
    if (array.length != index + 1) {
      this.showhhide[i] = !this.showhhide[i];
    }
  }
}
