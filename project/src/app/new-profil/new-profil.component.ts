import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-profil',
  templateUrl: './new-profil.component.html',
  styleUrls: ['./new-profil.component.scss']
})
export class NewProfilComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  forFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      phone1: ['', Validators.required],
      phone2: ['', Validators.required],
      adress: ['', Validators.required],
      postal: ['', Validators.required],
      city: ['', Validators.required],
      department: ['', Validators.required],
      region: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      birthday: ['', Validators.required],
      citybirthday: ['', Validators.required],
      countrybirthday: ['', Validators.required],
      nationality: ['', Validators.required],
      statut: ['', Validators.required],
      numberSecu: ['', Validators.required],
      licence: ['', Validators.required],
      vehicule: ['', Validators.required],
      mobile: ['', Validators.required],
      handicapped: ['', Validators.required]
    });
    this.threeFormGroup = this._formBuilder.group({
      training: ['', Validators.required],
      funding: ['', Validators.required],
      
    });
    this.forFormGroup = this._formBuilder.group({
      password: ['', Validators.required]      
    });
    // this.secondFormGroup = this._formBuilder.group({
    //   cotrol: ['', Validators.required],
    // });
  }

  onSubmit(){
    console.log('envoyer')
  }
}
