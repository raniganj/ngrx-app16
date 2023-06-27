import { state } from '@angular/animations';
import { createAction, createReducer, on, props } from '@ngrx/store';

export interface TodoModel {
  id?: number;
  userId?: number;
  title?: string;
  completed?: boolean;
}

export interface TodoStore {
  todo?: TodoModel;
  todoList?: TodoModel[];
  loading?: boolean;
}

export const getTodoAction = createAction(
  'Get Todo Action',
  props<{ id: number }>()
);
export const getTodoSuccessAction = createAction(
  'Get Todo Success Action',
  props<{ response: TodoModel }>()
);

export const getTodoListAction = createAction('Get Todo List Action');
export const getTodoListSuccessAction = createAction(
  'Get Todo List Success Action',
  props<{ response: any }>()
);

// Inititialization
export const initialState = { todo: {}, todoList: [] };

// Reducer with state and Action
export const todoReducer = createReducer(
  initialState,

  on(getTodoAction, (state, { id }) => {
    return { ...state, loading: true };
  }),

  on(getTodoSuccessAction, (state, { response }) => {
    return { ...state, todo: response, loading: false };
  }),

  on(getTodoListAction, (state) => {
    return { ...state, loading: true };
  }),

  on(getTodoListSuccessAction, (state, { response }) => {
    return { ...state, todoList: response, loading: false };
  })
);
