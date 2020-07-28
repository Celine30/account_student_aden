import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfilUnit } from '../profilUnit'

@Injectable()

export class ProfileService{

    constructor( private httpClient : HttpClient ) {}

    private ProfileZoom : Object

    ProfileZoomSubject = new Subject<any>();

    emitProfileZoomSubject (){
        this.ProfileZoomSubject.next(this.ProfileZoom);
    }

    getProfileUnitToServer($profile){
        this.httpClient
            .post<any>('http://localhost:8888/API-aden/index.php?action=back!session',JSON.stringify($profile) )
            .subscribe(
                (response) =>{
                    this.ProfileZoom = response;
                    console.log(response[0].training)
                    this. ProfileZoom = new ProfilUnit(
                        response[0].name,
                        response[0].firstName,
                        response[0].email,
                        response[0].phone1,
                        response[0].phone2,
                        response[0].address,
                        response[0].postal,
                        response[0].city,
                        response[0].department,
                        response[0].region,
                        response[0].birthday,
                        response[0].cityBirthday,
                        response[0].countryBirthday,
                        response[0].nationality,
                        response[0].statut,
                        response[0].statutAutre,
                        response[0].numberSecu,
                        response[0].haslicence,
                        response[0].licence,
                        response[0].vehicule,
                        response[0].mobile,
                        response[0].mobilityParameter,
                        response[0].handicapped,
                        response[0].training,
                        response[0].funding,
                        response[0].password,
                        response[0].CV, 
                        response[0].photo,
                        response[0].advice)
                    console.log(this.ProfileZoom)
                    this.emitProfileZoomSubject();
                },
                (error) => {
                    console.log('Erreur de chargement' + error);
                }
            )
    }
}