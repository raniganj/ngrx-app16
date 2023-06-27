import { state } from '@angular/animations';
import { createAction, createReducer, on, props } from '@ngrx/store';

export interface CommentsModel {
  postId?: number;
  id?: number;
  name?: string;
  email?: string;
  body?: string;
}

export interface CommentsStore {
  comments?: CommentsModel;
  commentsList?: CommentsModel[];
  loading?: boolean;
}

export const getCommentsAction = createAction(
  'Get Comments Action',
  props<{ id: number }>()
);
export const getCommentsSuccessAction = createAction(
  'Get Comments Success Action',
  props<{ response: CommentsModel }>()
);

export const getCommentsListAction = createAction('Get Comments List Action');
export const getCommentsListSuccessAction = createAction(
  'Get Comments List Success Action',
  props<{ response: any }>()
);

// Inititialization
export const initialState = { comments: {}, commentsList: [] };

// Reducer with state and Action
export const commentsReducer = createReducer(
  initialState,

  on(getCommentsAction, (state, { id }) => {
    return { ...state, loading: true };
  }),

  on(getCommentsSuccessAction, (state, { response }) => {
    return { ...state, comments: response, loading: false };
  }),

  on(getCommentsListAction, (state) => {
    return { ...state, loading: true };
  }),

  on(getCommentsListSuccessAction, (state, { response }) => {
    return { ...state, commentsList: response, loading: false };
  })
);
