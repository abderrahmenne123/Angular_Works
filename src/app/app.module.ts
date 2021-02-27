import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { HiredCvComponent } from './hired-cv/hired-cv.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { MiniwordComponent } from './miniword/miniword.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import {FormsModule} from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { NF404Component } from './nf404/nf404.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    HiredCvComponent,
    HeaderComponent,
    TodoComponent,
    MiniwordComponent,
    RouterSimulatorComponent,
    ColorComponent,
    AddPersonComponent,
    FrontComponent,
    BackComponent,
    NF404Component,
    DetailPersonComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
