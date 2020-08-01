import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-book",
  templateUrl: "./book.page.html",
  styleUrls: ["./book.page.scss"],
})
export class BookPage implements OnInit {
  Cards = [
    {
      date: "17",
      month: "jan",
      subTitle: "Today’s Activities",
      completed: true,
      title: "Bathing, Grooming Breakfast, Medicine, Lunch",
      notes: "Breakfast-Bread with peanut butter, Lunch-Pasta and garlic bread",
      liked: true,
    },
    {},
  ];
  constructor() {}

  ngOnInit() {}
}
