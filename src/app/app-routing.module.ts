import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AikatsuStarsComponent } from './aikatsu-stars/aikatsu-stars.component';
import { AikatsuFriendsComponent } from './aikatsu-friends/aikatsu-friends.component';
import { FirestoreTestComponent } from './firestore-test/firestore-test.component';

const routes: Routes = [
  { path: 'friends', component: AikatsuFriendsComponent },
  { path: 'stars', component: AikatsuStarsComponent },
  { path: 'firestore', component: FirestoreTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
