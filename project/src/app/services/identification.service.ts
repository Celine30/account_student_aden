import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()

export class IdentificationService{

    constructor( private httpClient : HttpClient ) {}


    openSession ($email){
        console.log($email);
        this.httpClient
                .post('http://localhost:8888/API-aden/index.php?action=back!session',JSON.stringify($email) )
                .subscribe(
                    (response) =>{
                        sessionStorage.setItem('ID_connected', response[0].ID);
                    // console.log(sessionStorage.getItem('ID_connected'));
                },
                (error) => {
                    // console.log('Erreur de chargement' + error);
                    console.log(Object.values(error));
                })
    }

}
