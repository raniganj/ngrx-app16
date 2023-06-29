import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CommentsModel,
  getCommentsAction,
} from 'src/app/store/comments.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() inputComponentsObj: CommentsModel | undefined;

  commentsObj: CommentsModel | undefined;
  commentsList: CommentsModel[] | undefined;
  loading: boolean = false;

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    if (!this.inputComponentsObj) {
      this.store.dispatch(getCommentsAction({ id: 1 }));
    }

    this.store.subscribe((state) => {
      this.commentsObj =
        this.inputComponentsObj || state.commentsStore.comments;
      this.loading = state.commentsStore.loading || false;
    });
  }

  getComponentsUser() {
    this.store.dispatch(getCommentsAction({ id: 1 }));
  }
}
