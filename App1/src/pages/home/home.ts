import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  primero:string;
  segundo:string;
  auxiliar:any;
  signo:string;
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

