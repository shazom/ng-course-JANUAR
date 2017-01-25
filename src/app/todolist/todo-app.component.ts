import {Component, OnInit, Self, Optional} from "@angular/core";
import {Todolist} from "./todolist.service";
import {StorageService} from "../utils/storage.service";

const TODOLIST = {
  provide   : Todolist,
  useFactory: storage => new Todolist(storage, 'LIST'),
  deps      : [StorageService]
};

@Component({
  selector : 'todo-app',
  providers: [TODOLIST],
  template : ``
})
export class TodoAppComponent implements OnInit {

  private appTitle: string;
  private list: Todolist;

  constructor(list: Todolist,) {
    console.log('TodoAppComponent instance');
    this.list     = list;
    this.appTitle = "TODOS";
  }

  ngOnInit() {
  }


}
