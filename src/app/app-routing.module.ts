import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {MiniwordComponent} from './miniword/miniword.component';
import {ColorComponent} from './color/color.component';
import {AddPersonComponent} from './add-person/add-person.component';
import {FrontComponent} from './front/front.component';
import {BackComponent} from './back/back.component';
import {NF404Component} from './nf404/nf404.component';
import {DetailComponent} from './detail/detail.component';
import {DetailPersonComponent} from './detail-person/detail-person.component';
import {LoginComponent} from './login/login.component';
import {AddComponent} from './cv/add/add.component';

const routes: Routes = [
  {
    path: 'cv',
  children: [
    {path: '', component: CvComponent},
    {path: 'add',
    component: AddComponent
    },
    {path: ':id',
      component: DetailPersonComponent
    },
  ]
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'front',
    component: FrontComponent,
    children: [
      {
        path: 'color/:color',
        component: ColorComponent
      }
    ]
  },
  {
    path: 'back',
    component: BackComponent,
    children: [
      {
        path: 'miniword',
        component: MiniwordComponent
      }
    ]
  }
  ,
  {path: '**', component: NF404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
