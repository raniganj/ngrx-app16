import { createAction, createReducer, on, props } from '@ngrx/store';

export interface ScoreModel {
  team1Score?: number;
  team2Score?: number;
}

export interface ScoreStore {
  score?: ScoreModel;
}

export const team1ScoreIncreament = createAction('On Team1 Score Increament');
export const mumScoreincWithPayload = createAction(
  '[On Team1 Score Increament With paylaod]',
  props<{ incrementBy: number }>()
);

export const team2ScoreIncreament = createAction('On Team2 Score Increament');
export const team2ScoreIncWithPayload = createAction(
  'On Team2 Score Increament With paylaod',
  props<{ incrementBy: number }>()
);

export const initialState: ScoreStore = {
  score: {
    team1Score: 0,
    team2Score: 0,
  },
};

export const scoreReducer = createReducer(
  initialState,

  on(team1ScoreIncreament, (state) => {
    let team1Score = state.score?.team1Score || 0;
    let newscore = { ...state.score, team1Score: team1Score + 1 };
    return { ...state, score: newscore };
  }),

  on(mumScoreincWithPayload, (state, { incrementBy }) => {
    let team1Score = state.score?.team1Score || 0;
    let newscore = { ...state.score, team1Score: team1Score + incrementBy };
    return { ...state, score: newscore };
  }),

  on(team2ScoreIncreament, (state) => {
    let team2Score = state.score?.team2Score || 0;
    let newscore = { ...state.score, team2Score: team2Score + 1 };
    return { ...state, score: newscore };
  }),

  on(team2ScoreIncWithPayload, (state, { incrementBy }) => {
    let team2Score = state.score?.team2Score || 0;
    let newscore = { ...state.score, team2Score: team2Score + incrementBy };
    return { ...state, score: newscore };
  })
);
