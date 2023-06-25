import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostState, getPostList, getPostUser } from 'src/app/store/post.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  postObj : PostState | undefined;
  postList : PostState[] | undefined;
  // postList: Observable = this.store.select(state => state.postUser);


  constructor(private store:Store<MyAppState>){}

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      this.postObj = state.postUser
    })
  }

  getPostUser(){
    this.store.dispatch(getPostUser())
  }

  getPostList(){
    this.store.dispatch(getPostList())
  }

}
