import {Component, OnInit} from "@angular/core";
import {Todolist} from "./todolist.service";

@Component({
  selector: 'todo-app',
  template: `

    <section class="todoapp">
      <app-todo-header>
        <app-todo-title [title]="appTitle"></app-todo-title>
        <app-todo-input (add)="list.addItem($event)" ></app-todo-input>      
      </app-todo-header>
      
      <app-todo-main>
          <app-todo-toggle (toggle)="list.toggle($event)"></app-todo-toggle>
          <app-todo-items  [items]="list.items"></app-todo-items>
      </app-todo-main>
      
      <app-todo-footer>
           <app-todo-counter></app-todo-counter>
           <app-todo-clear-btn label="archive done" 
                               (clear)="list.removeDone()"></app-todo-clear-btn>
      </app-todo-footer>
    </section>
  `
})
export class TodoAppComponent implements OnInit {

  private appTitle: string;
  private list: Todolist;

  constructor(list: Todolist) {
    this.list     = list;
    this.appTitle = "TODOS";
  }

  ngOnInit() {
  }

  countUnDone(){
    return this.list.items.filter( item => item.done === false).length
  }

}
