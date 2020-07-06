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

import { HttpClientModule } from '@angular/common/http';
import { NewProfilComponent } from './new-profil/new-profil.component';
import { NewContactComponent } from './new-contact/new-contact.component'

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
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
