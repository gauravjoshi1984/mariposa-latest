import { DataserviceService } from './pages/dataservice.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';

const { PushNotifications, Device, LocalNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    dataService: DataserviceService
  ) {
    this.initializeApp();
    Device.getInfo().then(data => {
      if (data.platform !== 'web'){
        PushNotifications.requestPermission().then( result => {
          if (result.granted) {
            // Register with Apple / Google to receive push via APNS/FCM
            console.log('result granted');
            PushNotifications.register();
          } else {
            // Show some error
            console.log('result not granted');
          }
        });
        PushNotifications.addListener('registration',
            (token: PushNotificationToken) => {
              data.uuid = token.value;
              dataService.setDeviceInfo(data);
          }
        );
        PushNotifications.addListener('pushNotificationReceived',
          (notification: PushNotification) => {
            alert('Push received: ' + JSON.stringify(notification));
          }
        );
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      const notifs = LocalNotifications.schedule({
        notifications: [
          {
            title: 'Mariposa',
            body: 'Welcome to Mariposa!',
            id: 1,
            schedule: { at: new Date(Date.now() + 1000 * 5) },
            smallIcon: '/assets/MariposaIcons/mariposa-icon.png',
            actionTypeId: '',
          }
        ]
      });
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#000000');
      this.splashScreen.hide();
    });
  }
}
