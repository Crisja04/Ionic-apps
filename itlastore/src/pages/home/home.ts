import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


interface ToDo{
  task: string;
  priority: number;
  id?: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todoCollection: AngularFirestoreCollection<ToDo>;
  todo: ToDo[];
  canReorder: boolean = false;

  constructor(public alertCtrl: AlertController, private asf: AngularFirestore){}

  ionViewDidEnter() {
    this.todoCollection = this.asf.collection('todo', ref => ref.orderBy('priority'));
    this.todoCollection.snapshotChanges().subscribe(todoList => {
      this.todo = todoList.map(item => {
        return {
          task: item.payload.doc.data().task,
          priority: item.payload.doc.data().priority,
          id: item.payload.doc.id
        }
      })
    });
  }
  reorderItems(indexes: any) {
    if ( this.canReorder ) {
      // Lote de procesos
      let batch = this.asf.firestore.batch();

      // Mover elementos
      let element = this.todo[indexes.from];
      this.todo.splice(indexes.from, 1);
      this.todo.splice(indexes.to, 0 , element);

      // Agregarmos updates al batch
      this.todo.forEach((item: ToDo, index: number) => {
        if ( item.priority != index ) {
          let ref = this.asf.doc(`todo/${item.id}`).ref;
          batch.update(ref, { priority: index });
        }
      });
      // Ejecutamos lote de procesos
      batch.commit().then(() => {
        console.log('Lista de tareas reordenada...');
      }).catch(err => {
        console.error(err);
      });
    }
  }
  deleteItem(item: ToDo) {
    this.asf.doc(`todo/${item.id}`).delete().then(() =>{
      console.log(`Tarea Eliminada: "${item.task}"`);
    }).catch(err => {
      console.error(err);
    })
  }
  newItem(){
    let prompt = this.alertCtrl.create({
      title:'Agregar Tarea',
      message: 'Indica la nueva tarea a agregar',
      inputs: [{
        name: 'task',
        placeholder: 'Nueva Tarea'
      }],
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Guardar',
        handler: data => {
          this.addTask(data.task);
        }
      }]
    }).present();
  }
  addTask(task: string) {
    let priority = 0;
    if ( this.todo.length > 0 ) {
      let last = this.todo.length - 1;
      priority = this.todo[last].priority + 1;
    }
    this.asf.collection('todo').add({task, priority}).then(newItem => {
      console.log(`Nueva Tarea: "${task}" (ID: ${newItem.id})`);
    }).catch(err => {
      console.error(err);
    });
  }
}
