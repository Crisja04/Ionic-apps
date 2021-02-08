import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})
export class CalculadoraPage {
  primero:string;
  segundo:string;
  auxiliar:any;
  signo:string;
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }
  constructor(public navCtrl: NavController) { }
  Resultado(){
    switch(this.signo) {
      case "+":
      this.segundo=this.auxiliar;
      this.auxiliar=(parseInt(this.primero,10)+parseInt(this.segundo,10));
      break;
      
      case "-":
      this.segundo=this.auxiliar;
      this.auxiliar=(parseInt(this.primero,10)-parseInt(this.segundo,10));
      break;

      case "*":
      this.segundo=this.auxiliar;
      this.auxiliar=(parseInt(this.primero,10)*parseInt(this.segundo,10));
      break;

      case "/":
      this.segundo=this.auxiliar;
      this.auxiliar=(parseInt(this.primero,10)/parseInt(this.segundo,10));
    }
  }
  Asignacion(x){
    this.auxiliar=x;
  }
  Borrar(){
    this.auxiliar='';
  }
  LimpiarSuma(){
    this.primero=this.auxiliar;
    console.log(this.primero);
    this.signo="+";
    console.log(this.signo);
    this.auxiliar='';
  }
  LimpiarResta(){
    this.primero=this.auxiliar;
    console.log(this.primero);
    this.signo="-";
    console.log(this.signo);
    this.auxiliar='';
  }
  LimpiarProducto(){
    this.primero=this.auxiliar;
    console.log(this.primero);
    this.signo="*";
    console.log(this.signo);
    this.auxiliar='';
  }
  LimpiarDivision(){
    this.primero=this.auxiliar;
    console.log(this.primero);
    this.signo="/";
    console.log(this.signo);
    this.auxiliar='';
  }
}
