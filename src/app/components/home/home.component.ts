import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementCounter, incrementCounterByParam } from 'src/app/store/counter.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ngrx-app';
  counter:number|undefined;
  inputValue:number = 0;

  constructor(private store:Store<MyAppState>) { }

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      this.counter = state.counter;
    })
  }

  incrementCounter(){
    this.store.dispatch(incrementCounter())
  }

  incrementCounterByParam(){
    this.store.dispatch(incrementCounterByParam({val:this.inputValue}))
  }
}
