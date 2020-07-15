import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { MaterialModule} from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowComponent } from './follow/follow.component';
import { MeetingComponent } from './meeting/meeting.component';
import { FooterBComponent } from './footer-b/footer-b.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { IdentificationService } from './services/identification.service';
import { FormationService } from './services/formation.service';
import { ProfileService } from './services/profile.service';

import { HttpClientModule } from '@angular/common/http';
import { NewProfilComponent } from './new-profil/new-profil.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { UnitFollowComponent } from './unit-follow/unit-follow.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfileComponent,
    FollowComponent,
    MeetingComponent,
    FooterBComponent,
    NewProfilComponent,
    NewContactComponent,
    UnitFollowComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    IdentificationService,
    FormationService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
