import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostModel, getPostAction, getPostListAction} from 'src/app/store/post.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  @Input() inputPostObj : PostModel | undefined;

  postObj : PostModel | undefined;
  postList : PostModel[] | undefined;
  loading : boolean = false;


  constructor(private store:Store<MyAppState>){}

  ngOnInit(): void {
    if (!this.inputPostObj) {
      this.store.dispatch(getPostAction({id : 1}))
    }

    this.store.subscribe((state)=>{
      this.postObj = this.inputPostObj || state.postStore.post;
      this.loading = state.postStore.loading || false;
    })
  }

  getPostUser(){
    this.store.dispatch(getPostAction({id:1}))
  }

}
