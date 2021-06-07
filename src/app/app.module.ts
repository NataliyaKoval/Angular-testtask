import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ReposComponent} from './components/repos/repos.component';
import {UsersListItemComponent} from './components/home/users-list-item/users-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReposComponent,
    UsersListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
