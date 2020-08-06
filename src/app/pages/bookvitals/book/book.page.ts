import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-book",
  templateUrl: "./book.page.html",
  styleUrls: ["./book.page.scss"],
})
export class BookPage implements OnInit {
  showData = false;
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

  constructor() {}

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
}
