import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AikatsuStarsComponent } from './aikatsu-stars/aikatsu-stars.component';
import { AikatsuFriendsComponent } from './aikatsu-friends/aikatsu-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    AikatsuStarsComponent,
    AikatsuFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
