import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IdentificationService } from '../services/identification.service'
import { Subscription } from 'rxjs/internal/Subscription';
import { ProfileService } from  '../services/profile.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profileConnected

  profileZoomSubscription : Subscription;
  
  constructor(private ProfileService : ProfileService) { }

  ngOnInit(): void {
    // console.log('Je suis à profile avec' + sessionStorage.getItem('email_connected'));
    this.ProfileService.getProfileUnitToServer(sessionStorage.getItem('email_connected'));
    this.profileZoomSubscription = this.ProfileService.ProfileZoomSubject.subscribe(
      (response) => {
          this.profileConnected=response
        });
    this.ProfileService.getProfileUnitToServer(sessionStorage.getItem('email_connected'));
    this.ProfileService.emitProfileZoomSubject() ;
  }

}
