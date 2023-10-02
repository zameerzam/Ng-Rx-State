import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { TodoReducer } from './reducers/todo-reducer';
import { AddTodoComponent } from './components/todo-list/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todos: TodoReducer} as ActionReducerMap<any,any>)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
