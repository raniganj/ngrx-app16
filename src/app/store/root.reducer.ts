import { counterReducer } from "./counter.reducer"
import { PostEffects } from "./post.effects";
import { PostStore, postReducer } from "./post.reducer";
import { ScoreStore, scoreReducer } from "./score.reducer";
import { UserData1, userData1Reducer } from "./user.reducer";

export interface MyAppState {
  counter : number;
  userData1 : UserData1,
  scoreStore : ScoreStore,
  postStore : PostStore,
}

export const rootReducer = {
   counter : counterReducer,
   userData1 : userData1Reducer,
   scoreStore : scoreReducer,
   postStore : postReducer
}


export const rootEffects = [PostEffects]
