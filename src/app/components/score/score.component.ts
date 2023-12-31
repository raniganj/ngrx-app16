import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { MyAppState } from 'src/app/store/root.reducer';
import {
  ScoreModel,
  team2ScoreIncWithPayloadAction,
  team2ScoreIncreamentAction,
  mumScoreincWithPayloadAction,
  team1ScoreIncreamentAction,
} from 'src/app/store/score.reducer';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  scoreData: ScoreModel | undefined;
  team1InputScore: number = 0;
  // team2InputScore:number = 0

  constructor(private store: Store<MyAppState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state.scoreStore);
      this.scoreData = state.scoreStore.score;
    });
  }

  team2Form = this.fb.group({
    team2InputScore: [0],
  });

  team1ScoreIncreament() {
    this.store.dispatch(team1ScoreIncreamentAction());
  }

  mumScoreincWithPayload() {
    this.store.dispatch(
      mumScoreincWithPayloadAction({ incrementBy: this.team1InputScore })
    );
  }

  team2ScoreIncreament() {
    this.store.dispatch(team2ScoreIncreamentAction());
  }

  team2ScoreincWithPayload() {
    let run = this.team2Form.value.team2InputScore;
    run = Number(run);
    this.store.dispatch(team2ScoreIncWithPayloadAction({ incrementBy: run }));
  }
}
