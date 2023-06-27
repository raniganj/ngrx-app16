import { counterReducer } from './counter.reducer';
import { PostEffects } from './post.effects';
import { PostStore, postReducer } from './post.reducer';
import { ScoreStore, scoreReducer } from './score.reducer';
import { TodoStore, todoReducer } from './todo.reducer';
import { UserData1, userData1Reducer } from './user.reducer';

export interface MyAppState {
  counter: number;
  userData1: UserData1;
  scoreStore: ScoreStore;
  postStore: PostStore;
  TodoStore: TodoStore;
}

export const rootReducer = {
  counter: counterReducer,
  userData1: userData1Reducer,
  scoreStore: scoreReducer,
  postStore: postReducer,
  TodoStore: todoReducer,
};

export const rootEffects = [PostEffects];
