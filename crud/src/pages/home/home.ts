import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Students = new Array();
  AddStudents={
    name:"",
    lastname:"",
    id:""
  }
  VisibleUpdate:boolean=true;
  VisibleEdit:boolean=false;

  constructor(public navCtrl: NavController) {}
  execute(StudentEdit){
    this.update(StudentEdit);
    this.AddStudents={
      name:"",
      lastname:"",
      id:""
    }
  }
  add(Student){
    this.Students.push(Student);
    this.AddStudents={
      name:"",
      lastname:"",
      id:""
    }
  }
  edit(Student){
    this.VisibleUpdate = false;
    this.VisibleEdit = true;
    this.AddStudents = {
      name:Student.name,
      lastname:Student.lastname,
      id:Student.id
    }
  }
  update(EditStudent){
    var i = this.Students.indexOf(EditStudent);
    this.Students.splice(i,1);
    this.Students.push(EditStudent);
    this.VisibleUpdate=true;
    this.VisibleEdit=false;
  }
  delete(NameStudent){
    var i = this.Students.indexOf(NameStudent);
    this.Students.splice(i,1); 
  }

}
