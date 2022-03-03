import { Injectable,EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CommunicationService {

  // declare a service level data object
  // this will have a value unchanged unless sender
  // does not update it
  id:number;

  // define a EventEmitter<T>, this will monitor
  // data update and will emit the data
  // so that the subscriber will receive it
  notify:EventEmitter<number>;

  constructor() {
    this.id = 0;
    this.notify = new EventEmitter<number>();
  }

  // lets add public method that will be invoked
  // by sender to send data so that
  // data object will be updated
  // once the data object is updated with new value
  // notify it so that
  // all subscriber can use it
  updateData(d:number):void {
    this.id = d;
    this.notify.emit(this.id);
  }

}
