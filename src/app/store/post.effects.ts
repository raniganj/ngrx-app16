import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getPostList, getPostListSuccess, getPostUser, getPostUserSuccess } from './post.reducer';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getSinglePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostUser),
      mergeMap(() => {
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


export class PostListEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getPostList$ = createEffect(() =>
    this.actions$.pipe(ofType(getPostList),
      switchMap(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return this.http.get(url).pipe(
          map((responseData) => {
            return getPostListSuccess({ response: responseData });
          }),
          catchError((error) => EMPTY)
        );
      })
    )
  );

  // getSwivlr$ = createEffect(() => {
  //   return this.actions$.pipe(ofType(GET_SWIVLR), // use reference, not just same string!!
  //     mergeMap(() => this.crudService.getAll<Swivlr[]>('endpointAddress').pipe(
  //     map((payload) => new GetSwivlr(payload)))),
  //     catchError((error) => of(new FailSwivlr(error)))
  //   );
  // });
}
