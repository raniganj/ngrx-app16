import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostState, getPostListAction} from 'src/app/store/post.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent  implements OnInit{
  postList : PostState[] | undefined;
  loading : boolean = false;


  constructor(private store:Store<MyAppState>){}

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      this.postList = state.postStore.postList
      this.loading = state.postStore.loading || false;
    })
  }

  getPostList(){
    this.store.dispatch(getPostListAction())
  }


}
