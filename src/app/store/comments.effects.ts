import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCommentsListAction,
  getCommentsListSuccessAction,
  getCommentsAction,
  getCommentsSuccessAction,
} from './comments.reducer';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class CommentsEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getSingleComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCommentsAction),
      mergeMap(({ id }) => {
        const url = `https://jsonplaceholder.typicode.com/commentss/${id}`;
        return this.http.get(url).pipe(
          map((responseData) => {
            return getCommentsSuccessAction({ response: responseData });
          }),
          catchError((error) => EMPTY)
        );
      })
    )
  );

  getCommentsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCommentsListAction),
      switchMap(() => {
        const url = 'https://jsonplaceholder.typicode.com/commentss';
        return this.http.get(url).pipe(
          map((responseData) => {
            return getCommentsListSuccessAction({ response: responseData });
          }),
          catchError((error) => EMPTY)
        );
      })
    )
  );
}
