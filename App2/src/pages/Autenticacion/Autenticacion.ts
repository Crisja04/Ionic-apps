import * as firebase from "firebase";
export interface Usuario {
    mail:string,
    password:string
}
var Autenticacion = new Usuario

}

firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });