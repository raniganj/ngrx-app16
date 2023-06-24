import { createAction , createReducer, on, props } from '@ngrx/store';

export interface UserData1{
  id:number;
  title: string;
  body: string;
  counter : number
}

export const userData1Increament = createAction('UserData1 Increament')
export const userData1IncreamentByParams = createAction('UserData1 Increament By Params',
  props<{val:number}>()
)


export const initialState:UserData1 = {
  id: 1,
  title : 'User Detail',
  body : 'This is User-1 detail',
  counter : 15
}

export const userData1Reducer = createReducer(
  initialState,

  on(userData1Increament, (state)=>{
    return {...state, counter:state.counter+1}
  }),

  on(userData1IncreamentByParams, (state, {val})=>{
    return {...state, counter:state.counter+val}
  })
)
