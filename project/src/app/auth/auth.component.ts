import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  AuthForm : FormGroup;
  authstatus = false;
  hide = true;
  error = false;

  constructor( private router: Router , private authService: AuthService, private formBuilder : FormBuilder) { }

  initForm(){
    this.AuthForm = this.formBuilder.group({
      identifiant: '',
      mdp:'',
    })
  }

  ngOnInit(): void {
    this.initForm();
    this.authstatus = this.authService.isAuth
    this.error = this.authService.error;
  }

  onsignIn(){
    const formValue = this.AuthForm.value;
    this.authService.signIn(formValue)
    // console.log(formValue)
    this.error = this.authService.error;
    this.authstatus = this.authService.isAuth;
    this.router.navigate(['profile']);
      }
    

}


