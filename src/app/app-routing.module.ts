import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ScoreComponent } from './components/score/score.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'static-obj',
  //   component: UsersComponent
  // },
  {
    path: 'score',
    component: ScoreComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'postList',
    component: PostListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
