import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { FormationService } from  '../services/formation.service'
import { Router } from '@angular/router';


export interface PeriodicElement {
  position: number;
  entreprise: string;
  contact: string;
  outils: string;
  relaunch:Date;
  response:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  ];

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})

export class FollowComponent implements OnInit {

  formationsSuiviesSubscription : Subscription;

  displayedColumns: string[] = ['position', 'entreprise', 'contact', 'outils', 'relaunch','response'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private FormationService : FormationService, private router :Router) {}


  directionUnit(x){
    console.log(x.ID_entreprise);
    console.log(sessionStorage.getItem('ID_connected'));
    this.router.navigate(['/unitFollow/'+ x.ID_entreprise])
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.FormationService.getFormationsSuiviesToServer(sessionStorage.getItem('ID_connected'));
    this.formationsSuiviesSubscription = this.FormationService.formationsSuiviesSubject.subscribe(
      (response) => {
        this.dataSource.data = response;
      });
    this.FormationService.emitFormationsSuiviesSubject();
    
}

}
