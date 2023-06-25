import { state } from "@angular/animations";
import { createAction, createReducer, on, props } from "@ngrx/store";


export interface PostState {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
}

export interface PostStore {
  post?: PostState;
  postList?: PostState[];
  loading?: boolean;

}

export const getPostAction = createAction('Get Post Action');
export const getPostSuccessAction = createAction('Get Post Success Action',
  props<{ response : PostState }>()
);

export const getPostListAction = createAction('Get Post List Action');
export const getPostListSuccessAction = createAction('Get Post List Success Action',
  props<{ response : any }>()
);



// Inititialization
export const initialState = {post:{}, postList:[]};


// Reducer with state and Action
export const postReducer = createReducer(
  initialState,

  on(getPostAction, (state)=>{
    return {...state, loading:true}
  }),

  on(getPostSuccessAction, (state, {response})=>{
    return {...state, post:response, loading:false}
  }),

  on(getPostListAction, (state)=>{
    return {...state, loading:true}
  }),

  on(getPostListSuccessAction, (state, {response})=>{
    return {...state, postList:response, loading:false}
  })
)
