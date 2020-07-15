import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormationService } from  '../services/formation.service'


@Component({
  selector: 'app-unit-follow',
  templateUrl: './unit-follow.component.html',
  styleUrls: ['./unit-follow.component.scss']
})
export class UnitFollowComponent implements OnInit {

  IdPost

  constructor(private router :Router, private route: ActivatedRoute , private FormationService : FormationService) { }

  ngOnInit(): void {
    this.IdPost=this.route.snapshot.params['id']
    console.log(this.IdPost)
    this.FormationService.getAllContact(sessionStorage.getItem('ID_connected'),this.IdPost)
  }

}
