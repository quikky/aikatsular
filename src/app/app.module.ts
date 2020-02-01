import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AikatsuStarsComponent } from './aikatsu-stars/aikatsu-stars.component';
import { AikatsuFriendsComponent } from './aikatsu-friends/aikatsu-friends.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirestoreTestComponent } from './firestore-test/firestore-test.component';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    AikatsuStarsComponent,
    AikatsuFriendsComponent,
    HeaderComponent,
    FooterComponent,
    FirestoreTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  // exports: [MatToolbarModule],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
