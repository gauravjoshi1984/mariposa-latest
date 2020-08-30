import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { ProfilelistComponent } from "../profilelist/profilelist.component";

@Component({
  selector: "app-book",
  templateUrl: "./book.page.html",
  styleUrls: ["./book.page.scss"],
})
export class BookPage implements OnInit {
  showData = true;
  Cards: any = [
    {
      id: 0,
      date: "17",
      month: "jan",
      subTitle: "Today’s Activities",
      completed: true,
      title: "Bathing, Grooming Breakfast, Medicine, Lunch",
      notes: "Breakfast-Bread with peanut butter, Lunch-Pasta and garlic bread",
      liked: false,
    },
    {
      id: 1,
      date: "17",
      month: "jan",
      subTitle: "Today’s Activities",
      completed: true,
      title: "Bathing, Grooming Breakfast, Medicine, Lunch",
      notes: "Breakfast-Bread with peanut butter, Lunch-Pasta and garlic bread",
      liked: false,
      image: true,
      imageurl: "assets/bg.png",
      imagetag: "Watching sunset at LA gardens",
    },
    {
      id: 2,
      date: "17",
      month: "jan",
      subTitle: "Today’s Activities",
      completed: true,
      title: "Bathing, Grooming Breakfast, Medicine, Lunch",
      notes: "Breakfast-Bread with peanut butter, Lunch-Pasta and garlic bread",
      liked: false,
    },
    {
      id: 3,
      date: "17",
      month: "jan",
      subTitle: "Today’s Activities",
      completed: true,
      title: "Bathing, Grooming Breakfast, Medicine, Lunch",
      notes: "Breakfast-Bread with peanut butter, Lunch-Pasta and garlic bread",
      liked: false,
    },
  ];

  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}
  toggleData() {
    this.showData = !this.showData;
  }
  likepost(item) {
    this.Cards.forEach((card) => {
      if (card.id == item.id) {
        card.liked = !card.liked;
      }
    });
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
