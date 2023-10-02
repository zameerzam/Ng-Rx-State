import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToDo } from '../../models/Todo';
import { CompletedActions, DeleteActions } from 'src/app/actions/todo-actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: ToDo[] | any ;
  latestId: number = -1;

  constructor(private store: Store<{todos: ToDo[]}>) {
    this.store.pipe(select('todos')).subscribe((va : ToDo[]) => {
      this.todoList = va;
      this.latestId = Math.max(...this.todoList.map((d:ToDo) => d.id)) || 0
    });    
  }
  
  ngOnInit(): void {
    
  }

  delete(id: Number) {
    this.store.dispatch(new DeleteActions(id));
  }

  completed(id: Number) {

    this.store.dispatch(new CompletedActions(id));
  }
}
