import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-todo-title',
  template: `
    <h1>{{ title }}</h1>    
  `
})
export class TodoTitleComponent implements OnInit {

  @Input() title: string;

  ngOnInit() {
  }

}
