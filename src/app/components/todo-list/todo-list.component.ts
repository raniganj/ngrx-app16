import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from 'src/app/store/root.reducer';
import { TodoModel, getTodoListAction } from 'src/app/store/todo.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: TodoModel[] | undefined;
  loading: boolean = false;

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getTodoListAction());

    this.store.subscribe((state) => {
      this.todoList = state.todoStore.todoList;
      this.loading = state.todoStore.loading || false;
    });
  }

  getTodoList() {
    this.store.dispatch(getTodoListAction());
  }
}
