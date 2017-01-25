import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-toggle',
  template: `
    <input class="toggle-all"    
           #input
           (change)="toggle.emit(input.checked)"
           type="checkbox">                      
  `
})
export class TodoToggleComponent  {

  @Output() toggle = new EventEmitter<boolean>();

}
