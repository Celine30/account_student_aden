import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class FormationService{

    

    constructor( private httpClient : HttpClient ) {}

    public formationsSuivies = [
        {position: 5, entreprise: 'Adista', contact: 'Mr Bertrand', outils:"Mail/LinkedIn", response:'en attente', relaunch: new Date('December 17, 1995 03:24:00')},
        {position: 4, entreprise: 'Hager Group', contact: 'Mr Fillon', outils:"Tel", response:'non', relaunch: new Date('10/08/2020')},
        {position: 3, entreprise: 'Carrefour', contact: 'Mme Tatenpion', outils:"Site/Linkedin", response:'en attente', relaunch: new Date('10/08/2020')},
        {position: 2, entreprise: 'Cora', contact: 'Vincent', outils:"mail/tel", response:'oui', relaunch: new Date('10/08/2020')},
        {position: 1, entreprise: 'SO Chic', contact: 'PaRis', outils:"Site", response:'en attente', relaunch: new Date('10/08/2020')},
    ]

    formationsSuiviesSubject = new Subject<any>();

    emitFormationsSuiviesSubject (){
        this.formationsSuiviesSubject.next(this.formationsSuivies.slice());
    }

    getFormationsSuiviesToServer($ID_connected){
        console.log($ID_connected)
        this.httpClient
            .post<any[]>('http://localhost:8888/API-aden/index.php?action=back!edit_suivis', JSON.stringify($ID_connected))
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
