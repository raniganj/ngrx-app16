import { counterReducer } from "./counter.reducer"
import { PostEffects, PostListEffects } from "./post.effects";
import { PostState, postReducer } from "./post.reducer";
import { ScoreState, scoreReducer } from "./score.reducer";
import { UserData1, userData1Reducer } from "./user.reducer";

export interface MyAppState {
  counter : number;
  userData1 : UserData1,
  score : ScoreState,
  postObj : PostState,
  postList : PostState[]
}

export const rootReducer = {
   counter : counterReducer,
   userData1 : userData1Reducer,
   score : scoreReducer,
   postObj : postReducer
}


export const rootEffects = [PostEffects, PostListEffects]
