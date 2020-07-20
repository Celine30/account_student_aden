import { Component, OnInit } from '@angular/core';
import { ProfileService } from  '../services/profile.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  breakpoint: number;

  profileConnected
  
  profileZoomSubscription : Subscription;

  constructor(private ProfileService : ProfileService) { }

  ngOnInit(): void {
 
    this.ProfileService.getProfileUnitToServer(sessionStorage.getItem('email_connected'));
    this.profileZoomSubscription = this.ProfileService.ProfileZoomSubject.subscribe(
      (response) => {
          console.log(response);
          this.profileConnected=response
      });
    this.ProfileService.emitProfileZoomSubject()  ;
    }

 
}
