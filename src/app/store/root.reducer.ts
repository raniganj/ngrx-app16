import { counterReducer } from "./counter.reducer"
import { PostEffects } from "./post.effects";
import { PostState, postReducer } from "./post.reducer";
import { UserData1, userData1Reducer } from "./user.reducer";

export interface MyAppState {
  counter : number;
  userData1 : UserData1,
  postState : PostState
}

export const rootReducer = {
   counter : counterReducer,
   userData1 : userData1Reducer,
   postUser : postReducer
}


export const rootEffects = [PostEffects]
