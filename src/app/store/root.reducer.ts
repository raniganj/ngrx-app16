import { counterReducer } from "./counter.reducer"
import { PostEffects } from "./post.effects";
import { PostStore, postReducer } from "./post.reducer";
import { ScoreState, scoreReducer } from "./score.reducer";
import { UserData1, userData1Reducer } from "./user.reducer";

export interface MyAppState {
  counter : number;
  userData1 : UserData1,
  score : ScoreState,
  postStore : PostStore,
}

export const rootReducer = {
   counter : counterReducer,
   userData1 : userData1Reducer,
   score : scoreReducer,
   postStore : postReducer
}


export const rootEffects = [PostEffects]
