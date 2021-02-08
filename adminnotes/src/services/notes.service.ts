import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NotesService{
    constructor(public afDB: AngularFireDatabase){}
    notes = [
        {id:1, title:"Nota 1", description:"Descripcion de Nota 1"},
        {id:2, title:"Nota 2", description:"Descripcion de Nota 2"},
        {id:3, title:"Nota 3", description:"Descripcion de Nota 3"}
    ];
    public getNotes(){
        return this.afDB.list('notas/').valueChanges();
    }
    note = {id:null, title:null, description:null};
    public getNote(id){
        return this.afDB.object('notas/'+ id).valueChanges();
    }
    public createNote(note){
        this.afDB.database.ref('notas/'+note.id).set(note);
    }
    public editNote(note){
        this.afDB.database.ref('notas/'+note.id).set(note);
    }
    public deleteNote(note){
        this.afDB.database.ref('notas/'+note.id).remove();
    }
    public Manageuser(){
        
    }
}