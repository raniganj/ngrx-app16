import { createAction, createReducer, on, props } from '@ngrx/store';

export interface ScoreModel {
  mumbaiScore?: number;
  cskScore?: number;
}

export interface ScoreStore {
  score?: ScoreModel;
}

export const mumbaiScoreIncreament = createAction('On mumbai Score Increament');
export const mumScoreincWithPayload = createAction(
  '[On mumbai Score Increament With paylaod]',
  props<{ incrementBy: number }>()
);

export const cskScoreIncreament = createAction('On CSK Score Increament');
export const cskScoreIncWithPayload = createAction(
  'On CSK Score Increament With paylaod',
  props<{ incrementBy: number }>()
);

export const initialState: ScoreStore = {
  score: {
    mumbaiScore: 0,
    cskScore: 0,
  },
};

export const scoreReducer = createReducer(
  initialState,

  on(mumbaiScoreIncreament, (state) => {
    let mumbaiScore = state.score?.mumbaiScore || 0;
    let newscore = { ...state.score, mumbaiScore: mumbaiScore + 1 };
    return { ...state, score: newscore };
  }),

  on(mumScoreincWithPayload, (state, { incrementBy }) => {
    let mumbaiScore = state.score?.mumbaiScore || 0;
    let newscore = { ...state.score, mumbaiScore: mumbaiScore + incrementBy };
    return { ...state, score: newscore };
  }),

  on(cskScoreIncreament, (state) => {
    let cskScore = state.score?.cskScore || 0;
    let newscore = { ...state.score, cskScore: cskScore + 1 };
    return { ...state, score: newscore };
  }),

  on(cskScoreIncWithPayload, (state, { incrementBy }) => {
    let cskScore = state.score?.cskScore || 0;
    let newscore = { ...state.score, cskScore: cskScore + incrementBy };
    return { ...state, score: newscore };
  })
);
