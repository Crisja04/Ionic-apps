import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note = {id:null, title:null, description:null};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService) {
    this.id = navParams.get('id');
    if (this.id != 0) {
      notesService.getNote(this.id)
        .subscribe(note => {
          this.id = note;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  addNote(){
    if(this.id != 0){
      //editando
      this.notesService.createNote(this.note);
      alert('Nota Editada');
    }else{
      this.note.id = Date.now();
      this.notesService.createNote(this.note);
      alert('Nota Creada');
    }
    this.navCtrl.pop();
  }
  deleteNote(){
    this.notesService.deleteNote(this.note);
    alert('Nota Eliminada');
    this.navCtrl.pop();
  }

}
