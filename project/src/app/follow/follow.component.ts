import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  entreprise: string;
  contact: string;
  outils: string;
  response:string;
  relaunch:Date
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, entreprise: 'Hydrogen', contact: 'cic', outils:"oui", response:'non', relaunch: new Date('December 17, 1995 03:24:00')},
  {position: 1, entreprise: 'Hydrogen', contact: 'cic', outils:"oui", response:'non', relaunch: new Date('10/08/2020')},
  {position: 1, entreprise: 'Hydrogen', contact: 'cic', outils:"oui", response:'non', relaunch: new Date('10/08/2020')},
  {position: 1, entreprise: 'Hydrogen', contact: 'cic', outils:"oui", response:'non', relaunch: new Date('10/08/2020')},
  {position: 1, entreprise: 'Hydrogen', contact: 'cic', outils:"oui", response:'non', relaunch: new Date('10/08/2020')},
];


@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})


export class FollowComponent implements OnInit {


  save = false;
  add = false;
  inscription_button_add = 'Ajouter';

  constructor() { }

  displayedColumns: string[] = ['position', 'entreprise', 'contact', 'outils', 'response', 'relaunch'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Compare le nbre total de ligne et le nbre de lignes selectionnees */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Sélectionne toutes les lignes si elles ne sont pas toutes sélectionnées; sinon sélection claire */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** Le Label de la case à cocher sur la ligne passée */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  onSaveEntreprise(){
    
  }


  onFormAddEntreprise(){
    if(this.add){
      this.add=false;
      this.inscription_button_add = 'Ajouter';
    }else{
      this.add=true
      this.inscription_button_add = 'Annuler';
    }
  }

  ngOnInit(): void {
    // this.episodeSubscription = this.episodeservice.episodesSubject.subscribe(
    //   (response) => {
    //     this.dataSource.data = response;
    //     this.save = true;
    //   }
    // );
    //this.episodeservice.emitEpisodesSubject()

  // }

}

}
