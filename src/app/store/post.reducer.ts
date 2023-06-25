import { state } from "@angular/animations";
import { createAction, createReducer, on, props } from "@ngrx/store";


export interface PostState {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
}

export const getPostAction = createAction('Get Post Action');
export const getPostSuccessAction = createAction('Get Post Success Action',
  props<{ response : PostState }>()
);

export const getPostListAction = createAction('Get Post List Action');
export const getPostListSuccessAction = createAction('Get Post List Success Action',
  props<{ response : any }>()
);

export const initialState = {};

export const postReducer = createReducer(
  initialState,

  on(getPostAction, (state)=>{
    return state
  }),

  on(getPostSuccessAction, (state, {response})=>{
    return {...state, ...response}
  }),

  on(getPostListAction, (state)=>{
    return state
  }),

  on(getPostListSuccessAction, (state, {response})=>{
    return {...state, ...response}
  })
)
