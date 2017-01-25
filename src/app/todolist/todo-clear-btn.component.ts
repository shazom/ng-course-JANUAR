import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-todo-clear-btn',
  template: `
     <button (click)="clear.emit()"                
             class="clear-completed">{{ label }}</button>
  `
})
export class TodoClearBtnComponent {
  @Input() label: string;
  @Output() clear = new EventEmitter<void>();
}
