import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddActions } from 'src/app/actions/todo-actions';
import { ToDo } from 'src/app/models/Todo';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

    latestId: number = -1;
    constructor(private store: Store<{ todos: ToDo[] }>) {

    }
    ngOnInit(): void {
        this.store.pipe(select('todos')).subscribe((d: ToDo[]) => {
            this.latestId = Math.max(...d.map(val => val.id)) + 1;
        });
    }


    newTodo(title: string) {
        console.log(this.latestId);
        this.store.dispatch(new AddActions(new ToDo(this.latestId, title)));
    }
}
