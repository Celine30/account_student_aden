import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'

@Injectable()

export class AuthService {


        authSubject = new Subject<boolean>();

        isAuth = false;
        error = false;


        constructor( private httpClient : HttpClient ) { }

        signIn(formValue)  {
                this.httpClient
                .get('http://localhost:8888/API-aden/index.php?action=back!post&identifiant='+formValue.identifiant+'&mdp='+formValue.mdp)
                .subscribe(
                        (response) =>{
                            console.log(response)
                        },
                        (error) => {
                            // console.log('Erreur de chargement' + error);
                            console.log(Object.values(error));
                        })

        }      

            

            // console.log('ok ici');
            // if(this.identifiant==formValue.identifiant){
            //     this.isAuth
            //     console.log("this.error = false")
            //     return this.isAuth = true;
            // }else{
            //     console.log("this.error = true")
            //     return this.error = true;
            // }
    
        
        
        signOut() {
            this.isAuth = false;
        }

        emitPostSubject (){
            this.authSubject.next(this.isAuth);
        }
        
    }