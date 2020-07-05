import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  connected = false;

  opened = false;
  authstatusSubcription :Subscription;

  constructor( private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.authstatusSubcription = this.authService.authSubject.subscribe(
      (response) => {
        this.connected=response;
      }
    );
  }

  logOut(){
    this.authService.isAuth=false;
    this.authService.emitPostSubject ();
    this.router.navigate(['follow']);
  }

}
