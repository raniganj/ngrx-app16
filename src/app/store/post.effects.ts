import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getPostUser, getPostUserSuccess } from './post.reducer';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getSinglePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostUser),
      switchMap(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        return this.http.get(url).pipe(
          map((responseData) => {
            return getPostUserSuccess({ response: responseData });
          }),
          catchError((error) => EMPTY)
        );
      })
    )
  );
}
