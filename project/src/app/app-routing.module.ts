import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowComponent } from './follow/follow.component';
import { MeetingComponent } from './meeting/meeting.component';
import { AuthGuard } from './services/auth-guard.service';
import { NewProfilComponent } from './new-profil/new-profil.component'
import { NewContactComponent } from './new-contact/new-contact.component'
import { UnitFollowComponent } from './unit-follow/unit-follow.component'


const routes: Routes = [
  { path:'', component : AuthComponent },
  { path:'profile', component : ProfileComponent },
  { path:'meeting', canActivate:[AuthGuard], component : MeetingComponent },
  { path:'follow', canActivate:[AuthGuard],  component : FollowComponent },
  { path:'newProfil', component : NewProfilComponent },
  { path:'newContact',  canActivate:[AuthGuard], component : NewContactComponent },
  { path:'auth', component : AuthComponent },
  { path:'unitFollow/:id',  canActivate:[AuthGuard], component : UnitFollowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
