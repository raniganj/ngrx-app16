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

export const initialState = {};

export const postReducer = createReducer(
  initialState,

  on(getPostUser, (state)=>{
    return state
  }),

  on(getPostUserSuccess, (state, {response})=>{
    return {...state, ...response}
  })
)
