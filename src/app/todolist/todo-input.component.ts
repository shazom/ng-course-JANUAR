import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input class="new-todo"           
           #inputBox
           [placeholder]="text"
           (keydown.enter)="dispatchEvent(inputBox.value)"
           autofocus>
  `
})
export class TodoInputComponent implements OnInit {

  @Output() add: EventEmitter<string>;

  private text:string;

  constructor() {
    this.text ='What needs to be done?';
    this.add = new EventEmitter<string>();
  }

  private dispatchEvent(value){
    this.add.emit(value)
  }

  ngOnInit() {
  }

}
