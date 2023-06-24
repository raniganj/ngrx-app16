import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from 'src/app/store/root.reducer';
import { UserData1, userData1Increament, userData1IncreamentByParams } from 'src/app/store/user.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userData: UserData1 | undefined;
  inputValue:number = 0;

  constructor(private store:Store<MyAppState>) { }

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      this.userData = state.userData1;
    })
  }

  userData1Increament(){
    this.store.dispatch(userData1Increament());
  }

  userData1IncreamentByParams(){
    this.store.dispatch(userData1IncreamentByParams({val : this.inputValue}))
  }
}
