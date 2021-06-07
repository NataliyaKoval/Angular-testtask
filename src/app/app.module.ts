import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from './components/home/home.component';
import {ReposComponent} from './components/repos/repos.component';
import {UsersListItemComponent} from './components/home/users-list-item/users-list-item.component';
import {SearchInputComponent} from './components/home/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReposComponent,
    UsersListItemComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
