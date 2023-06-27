import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from 'src/app/store/root.reducer';
import { TodoModel, getTodoAction } from 'src/app/store/todo.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() inputTodoObj: TodoModel | undefined;

  todoObj: TodoModel | undefined;
  todoList: TodoModel[] | undefined;
  loading: boolean = false;

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    if (!this.inputTodoObj) {
      this.store.dispatch(getTodoAction({ id: 1 }));
    }

    this.store.subscribe((state) => {
      this.todoObj = this.inputTodoObj || state.todoStore.todo;
      this.loading = state.todoStore.loading || false;
    });
  }

  getTodoUser() {
    this.store.dispatch(getTodoAction({ id: 1 }));
  }
}
