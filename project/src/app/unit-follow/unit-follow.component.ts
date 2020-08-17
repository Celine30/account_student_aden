import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormationService } from  '../services/formation.service'
import { Subscription } from 'rxjs';
import { EntrepriseUnit } from '../entrepriseUnit'


@Component({
  selector: 'app-unit-follow',
  templateUrl: './unit-follow.component.html',
  styleUrls: ['./unit-follow.component.scss']
})
export class UnitFollowComponent implements OnInit {

  IdPost
 
  formationOneSuivieSubscription : Subscription;
  informationsEntreprise:object;

  constructor(private router :Router, private route: ActivatedRoute , private FormationService : FormationService) { }

  ngOnInit(): void {
    this.IdPost=this.route.snapshot.params['id']
    console.log(this.IdPost)
    this.FormationService.getAllContact(sessionStorage.getItem('ID_connected'),this.IdPost);
    this.formationOneSuivieSubscription = this.FormationService.formationOneSuivieSubject.subscribe(
      (response)=> {
        console.log(response)
        this.informationsEntreprise = new EntrepriseUnit(response[0][0].entreprise,response[0][0].date_added,response[0][0].name_contact, response[0][0].contact,response[0][0].response,response[1])
        console.log(this.informationsEntreprise)
      }
    )
  }

}
