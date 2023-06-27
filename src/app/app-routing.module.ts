import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ScoreComponent } from './components/score/score.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'score',
    component: ScoreComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'postList',
    component: PostListComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'todoList',
    component: TodoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
