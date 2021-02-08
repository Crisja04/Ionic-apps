import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { HomePage } from '../home/home';
import * as firebase from "firebase";
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  users = {
    email:"",
    password:""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {}
  register(users){
    firebase.auth().createUserWithEmailAndPassword(users.email,users.password).then(data => {
      let alert = this.alert.create({
        title: 'Correcto',
        subTitle: 'Ha iniciado correctamente',
        buttons: ['Aceptar']
      });
      alert.present(); 
    });
  }
  login(users){
    firebase.auth().signInWithEmailAndPassword(users.email,users.password).then(data => {
      let alert = this.alert.create({
        title: 'Correcto',
        subTitle: 'Se ha registrado correctamente',
        buttons: ['Aceptar']
      });
      alert.present(); 
      //var index = usuario.email.localCompare("admin@itla.com");
      if(users.email == "admin@itla.com" && users.password == "123456") {
        this.navCtrl.push(AdminPage);
       }
       else {
        this.navCtrl.push(HomePage);
       }
    });
  }
  forgot(email){
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      console.log("Correcto")
    }).catch(function(error) {
      console.log("Error")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
