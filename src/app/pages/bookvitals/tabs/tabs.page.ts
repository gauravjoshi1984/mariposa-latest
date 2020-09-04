import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes } from '@angular/router';
import { IonTabBar, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  public bookimage = 'assets/MariposaIcons/Book_active.svg';
  public vitalsimage = 'assets/MariposaIcons/vitals_inactive.svg';
  public Calendarimage = 'assets/MariposaIcons/calendar_inactive.svg';
  public Menuimage = 'assets/MariposaIcons/menu_inactive.svg';
  @ViewChild('iontabs') iontab: IonTabs;
  TabsData = [
    {
      name: 'Book',
      href: 'books',
      status: 'active',
    },
    {
      name: 'Vitals',
      href: 'vitals',
      status: 'inactive',
    },
    {
      name: 'Calendar',
      href: 'calendar',
      status: 'inactive',
    },
    {
      name: 'Menu',
      href: 'menu',
      status: 'inactive',
    },
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.iontab);
  }
  changeTab(i) {
    this.TabsData.forEach((element) => {
      element.status = 'inactive';
      if (element.name === i.name) {
        element.status = 'active';
      }
    });
  }
}
