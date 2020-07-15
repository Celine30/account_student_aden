import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class FormationService{

    constructor( private httpClient : HttpClient ) {}

    private formationsSuivies = []

    public informations:Object

    formationsSuiviesSubject = new Subject<any>();

    emitFormationsSuiviesSubject (){
        this.formationsSuiviesSubject.next(this.formationsSuivies.slice());
    }

    getFormationsSuiviesToServer($ID_connected){
        this.formationsSuivies=[]
        this.httpClient
            .post<any[]>('http://localhost:8888/API-aden/index.php?action=back!edit_suivis', JSON.stringify($ID_connected))
            .subscribe(
                (responses) =>{
                    responses.forEach(
                        element =>this.formationsSuivies.push(
                            {position: element.position, entreprise: element.entreprise, contact: element.name_contact, outils : element.contact, response:element.response, relaunch : element.relauchdate, ID_entreprise : element.ID }
                        )
                    )
                    this.formationsSuivies=this.formationsSuivies.reverse();
                    this.emitFormationsSuiviesSubject()
                },
                (error) => {
                    console.log('Erreur de chargement' + error);
                }
            )
    }

    getAllContact($ID_connected,$ID_entreprise){
        this.informations = { ID_connected : $ID_connected};
        this.informations['ID_entreprise']=$ID_entreprise;
        console.log(this.informations) 
        this.httpClient
            .post<any[]>('http://localhost:8888/API-aden/index.php?action=back!edit_contactEntreprise', JSON.stringify(this.informations))
            .subscribe(
                (response) =>{
                    console.log(response)
                },
                (error) => {
                    console.log('Erreur de chargement' + error);
                }
            )
    }

}
