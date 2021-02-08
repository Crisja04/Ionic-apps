import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import * as firebase from "firebase";
import { LoginPage } from "../pages/login/login";
@Component({
  templateUrl: "app.html",
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      var config = {
        // Firebase credentials removed for archiving
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
      };
      firebase.initializeApp(config);
      statusBar.styleDefault();
      splashScreen.hide();
    });
    var admin = require("firebase-admin");
    var serviceAccount = require("../package.json");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "",
    });
  }
}
