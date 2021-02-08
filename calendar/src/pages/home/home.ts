import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { dateSortValue } from 'ionic-angular/umd/util/datetime-util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eventSource = []
  viewTitle: string
  selectedDay = new Date();
  calendar = {
    mode: "month",
    currentDate: this.selectedDay
  }
  constructor(public navCtrl: NavController) {

  }
  onViewTitleChanged(title){
    this.viewTitle = title;
  }
  onTimeSelected(ev){

  }
  onEventSelected(event){

  }
}
