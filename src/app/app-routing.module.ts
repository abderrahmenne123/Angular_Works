import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {MiniwordComponent} from './miniword/miniword.component';
import {ColorComponent} from './color/color.component';

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
  },
  {
    path: 'color/:color',
    component: ColorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
