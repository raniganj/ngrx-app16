import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getPostListAction, getPostListSuccessAction, getPostAction, getPostSuccessAction } from './post.reducer';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getSinglePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostAction),
      mergeMap(({id}) => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        return this.http.get(url).pipe(
          map((responseData) => {
            return getPostSuccessAction({ response: responseData });
          }),
          catchError((error) => EMPTY)
        );
      })
    )
  );


  getPostList$ = createEffect(() =>
    this.actions$.pipe(ofType(getPostListAction),
      switchMap(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return this.http.get(url).pipe(
          map((responseData) => {
            return getPostListSuccessAction({ response: responseData });
          }),
          catchError((error) => EMPTY)
        );
      })
    )
  );
}
