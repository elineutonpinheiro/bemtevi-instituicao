import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

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
    /* private fcm: FCM */

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

     /*  if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString('#33000000');
      } */

      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString('#FFCB08');
      }

    });

    /* this.fcm.getToken().then(token => {
      //backend.registerToken(token);
        console.log(token);
    });

    this.fcm.onNotification().subscribe(data => {
      console.log(data);
      if(data.wasTapped){
        console.log("Received in background");
      } else {
        console.log("Received in foreground");
      };
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      //backend.registerToken(token);
      console.log(token);
    });
 */

  }
}
