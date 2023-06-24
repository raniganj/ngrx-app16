import { createAction, createReducer, on, props } from '@ngrx/store';

export const incrementCounter = createAction('Increase Counter');
export const incrementCounterByParam = createAction('Increase Counter By Params',
  props<{val:number}>()
)

export const initialState = 20;

export const counterReducer = createReducer(
  initialState,
  on(incrementCounter, (state)=>{
    return state+1
  }),

  on(incrementCounterByParam, (state, {val})=>{
    return state + val;
  })
)

