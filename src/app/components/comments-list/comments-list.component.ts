import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CommentsModel,
  getCommentsListAction,
} from 'src/app/store/comments.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent implements OnInit {
  commentsList: CommentsModel[] | undefined;
  loading: boolean = false;

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getCommentsListAction());

    this.store.subscribe((state) => {
      this.commentsList = state.commentsStore.commentsList;
      this.loading = state.commentsStore.loading || false;
    });
  }

  getCommentsList() {
    this.store.dispatch(getCommentsListAction());
  }
}
