import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { FollowerComponent } from './home/follower/follower.component'
import { RepositoryComponent } from './home/repository/repository.component'
import { ContributorComponent } from './home/contributor/contributor.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FollowerComponent,
    RepositoryComponent,
    ContributorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
