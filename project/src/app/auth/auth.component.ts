import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { IdentificationService } from '../services/identification.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  AuthForm : FormGroup;
  authstatusSubcription :Subscription;
  hide = true;
  error = false;
  authstatus: boolean;

  constructor( private router: Router ,
    private authService: AuthService,
    private formBuilder : FormBuilder,
    private identificationService : IdentificationService) { }

  initForm(){
    this.AuthForm = this.formBuilder.group({
      identifiant: '',
      mdp:'',
    })
  }

  ngOnInit(): void {

    this.initForm();
    this.authstatusSubcription = this.authService.authSubject.subscribe(
      (response) => {
        console.log(response + ' dans la subcription')
        this.authstatus = response;
        this.error = !response;
        if(response){
          this.router.navigate(['profile']);
          this.identificationService.openSession(this.AuthForm.value.identifiant)
        }
      }
    );
  }

  onsignIn(){
    const formValue = this.AuthForm.value;
    this.authService.signIn(formValue);
    }
   
    

}


