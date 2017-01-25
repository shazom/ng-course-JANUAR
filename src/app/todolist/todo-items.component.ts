import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Item} from "./todolist.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-items',
  template: `
  <ul class="todo-list">
    <app-todo-item *ngFor="let item of items" 
                   [item]="item">                   
    </app-todo-item>
   </ul>
  `
})
export class TodoItemsComponent  {

  @Input() items: Item[];

}
