import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from "firebase"
import { AlertController } from 'ionic-angular';
import { CalculadoraPage } from '../calculadora/calculadora';
import { AdministradorPage } from '../administrador/administrador';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario = {
    email:"",
    password:""
  };
  constructor(public navCtrl: NavController, public alert: AlertController) {}
  register(usuario){
    firebase.auth().createUserWithEmailAndPassword(usuario.email,usuario.password).then(data => {
      let alert = this.alert.create({
        title: 'Correcto',
        subTitle: 'Ha iniciado correctamente',
        buttons: ['Aceptar']
      });
      alert.present(); 
    });
  }
  login(usuario){
    firebase.auth().signInWithEmailAndPassword(usuario.email,usuario.password).then(data => {
      let alert = this.alert.create({
        title: 'Correcto',
        subTitle: 'Se ha registrado correctamente',
        buttons: ['Aceptar']
      });
      alert.present(); 
      //var index = usuario.email.localCompare("admin@itla.com");
      if(usuario.email == "admin@itla.com" && usuario.password == "123456") {
        this.navCtrl.push(AdministradorPage);
       }
       else {
        this.navCtrl.push(CalculadoraPage);
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

}
