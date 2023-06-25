import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { MyAppState } from 'src/app/store/root.reducer';
import { ScoreModel, cskScoreIncWithPayload, cskScoreIncreament, mumScoreincWithPayload, mumbaiScoreIncreament } from 'src/app/store/score.reducer';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  scoreData:ScoreModel|undefined;
  mumbaiInputScore:number = 0
  // cskInputScore:number = 0


  constructor( private store:Store<MyAppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      console.log(state.scoreStore)
      this.scoreData = state.scoreStore.score;
    })

  }

  cskForm = this.fb.group({
    cskInputScore: [0],
  });

  mumbaiScoreIncreament(){
    this.store.dispatch(mumbaiScoreIncreament())

  }

  mumScoreincWithPayload(){
    this.store.dispatch(mumScoreincWithPayload({ incrementBy: this.mumbaiInputScore }))
  }

  cskScoreIncreament(){
    this.store.dispatch(cskScoreIncreament())
  }

  cskScoreincWithPayload(){
    let run = this.cskForm.value.cskInputScore;
    run = Number(run)
    this.store.dispatch(cskScoreIncWithPayload({ incrementBy: run }))
  }


}
