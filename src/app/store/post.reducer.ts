import { state } from "@angular/animations";
import { createAction, createReducer, on, props } from "@ngrx/store";


export interface PostState {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
}

export const getPostUser = createAction('Get Post User Data');
export const getPostUserSuccess = createAction('Get Post User Data Success',
  props<{ response : PostState }>()
);

export const getPostList = createAction('Get Post List');
export const getPostListSuccess = createAction('Get Post List',
  props<{ response : any }>()
);

export const initialState = {};

export const postReducer = createReducer(
  initialState,

  on(getPostUser, (state)=>{
    return state
  }),

  on(getPostUserSuccess, (state, {response})=>{
    return {...state, ...response}
  }),

  on(getPostList, (state)=>{
    return state
  }),

  on(getPostListSuccess, (state, {response})=>{
    return {...state, ...response}
  })
)
