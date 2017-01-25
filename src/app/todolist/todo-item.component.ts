import {Component, OnInit, Input} from '@angular/core';
import {Item} from "./todolist.service";
import {UpperPipe} from "../utils/upper.pipe";

@Component({
  selector: 'app-todo-item',
  template: `
    <li>
        <div class="view">
          <input class="toggle"
                 [checked]="item.done"
                 type="checkbox">

          <label appMarker>{{ item.title | upper }}</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">
      </li>
  `,
})
export class TodoItemComponent {

  @Input() item:Item;

}
