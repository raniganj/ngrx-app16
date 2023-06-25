import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostState, getPostAction, getPostListAction} from 'src/app/store/post.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  postObj : PostState | undefined;
  postList : PostState[] | undefined;
  loading : boolean = false;


  constructor(private store:Store<MyAppState>){}

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      this.postObj = state.postStore.post;
      this.loading = state.postStore.loading || false;
    })
  }

  getPostUser(){
    this.store.dispatch(getPostAction())
  }

}
