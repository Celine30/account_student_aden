import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowComponent } from './follow/follow.component';
import { MeetingComponent } from './meeting/meeting.component';

const routes: Routes = [
  { path:'', component : AuthComponent },
  { path:'profile', component : ProfileComponent },
  { path:'meeting', component : MeetingComponent },
  { path:'follow', component : FollowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
