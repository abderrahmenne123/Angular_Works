import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {MiniwordComponent} from './miniword/miniword.component';

const routes: Routes = [
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'miniword',
    component: MiniwordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
