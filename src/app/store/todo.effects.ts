import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getTodoListAction,
  getTodoListSuccessAction,
  getTodoAction,
  getTodoSuccessAction,
} from './todo.reducer';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getSingleTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodoAction),
      mergeMap(({ id }) => {
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
        return this.http.get(url).pipe(
          map((responseData) => {
            return getTodoSuccessAction({ response: responseData });
          }),
          catchError((error) => EMPTY)
        );
      })
    )
  );

  getTodoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodoListAction),
      switchMap(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        return this.http.get(url).pipe(
          map((responseData) => {
            return getTodoListSuccessAction({ response: responseData });
          }),
          catchError((error) => EMPTY)
        );
      })
    )
  );
}
