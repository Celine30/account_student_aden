import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowComponent } from './follow/follow.component';
import { MeetingComponent } from './meeting/meeting.component';
import { AuthGuard } from './services/auth-guard.service';
import { NewProfilComponent } from './new-profil/new-profil.component'


const routes: Routes = [
  { path:'', component : AuthComponent },
  { path:'profile', canActivate:[AuthGuard], component : ProfileComponent },
  { path:'meeting',  canActivate:[AuthGuard], component : MeetingComponent },
  { path:'follow',   component : FollowComponent },
  { path:'newProfil', component : NewProfilComponent },
  { path:'auth', component : AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
