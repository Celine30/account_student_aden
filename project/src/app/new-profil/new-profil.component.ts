import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
// import { ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-new-profil',
  templateUrl: './new-profil.component.html',
  styleUrls: ['./new-profil.component.scss'],
  providers: [
    {provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}},
  ]   
})
export class NewProfilComponent implements OnInit {
  isLinear = false;


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  forFormGroup: FormGroup;
  


  constructor(private _formBuilder: FormBuilder, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('fr'); 
  }



  startDate = new Date(1990, 0, 1);
  pw1:string;
  pw2:string;
  numberSecu:string;
  formSecu = this.numberSecu+'ici';
  value:string ='';
  regex = new RegExp("[0-9]{13}")

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', [Validators.required , Validators.pattern('.+[^0-9]')]],
      firstname: ['', [Validators.required , Validators.pattern('.+[^0-9]')]],
      email: ['', [Validators.required , Validators.pattern('^[A-Za-z0-9._-]+@[A-Za-z0-9]+[.][a-z]{2,6}')]],
      phone1: ['', [Validators.pattern('^(0[6-7]{1})([/ _.-]?[0-9]{2}){4}')]],
      phone2: ['', [Validators.pattern('^(0[1-59]{1})([/ _.-]?[0-9]{2}){4}')]],
      adress: ['', Validators.required],
      postal: ['',[Validators.required, Validators.pattern('[0-9]{5}')]],
      city: ['', [Validators.required , Validators.pattern('.+[^0-9]')]],
      department: ['', Validators.required],
      region: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      birthday: ['', Validators.required],
      citybirthday: ['', Validators.required],
      countrybirthday: ['', Validators.required],
      nationality: ['', Validators.required],
      statut: ['', Validators.required],
      numberSecu: ['', [Validators.required,Validators.minLength(18),Validators.maxLength(18),Validators.pattern('^[ 0-9]*$')]],
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
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#&§!ç$*€£%?]).{5,}')]],
      confirmPassword: ['', Validators.required]  
    });

    
    }

  get f() { return this.firstFormGroup.controls; }
  get f2() { return this.secondFormGroup.controls; }

  onSubmit(){
    console.log('envoyer');
    
  }

  shaping(event:KeyboardEvent){
    if(event.keyCode == 8  ){
        this.secondFormGroup.get('numberSecu').setValue("");
        }
    
    if(this.regex.test((<HTMLInputElement>event.target).value)){
      this.secondFormGroup.get('numberSecu').setValue(
        (<HTMLInputElement>event.target).value[0] +
        " "+
        (<HTMLInputElement>event.target).value[1] +
        (<HTMLInputElement>event.target).value[2] +
        " "+
        (<HTMLInputElement>event.target).value[3] +
        (<HTMLInputElement>event.target).value[4] +
        " "+
        (<HTMLInputElement>event.target).value[5] +
        (<HTMLInputElement>event.target).value[6] +
        " "+
        (<HTMLInputElement>event.target).value[7] +
        (<HTMLInputElement>event.target).value[8] +
        (<HTMLInputElement>event.target).value[9] +
        " "+
        (<HTMLInputElement>event.target).value[10] +
        (<HTMLInputElement>event.target).value[11] +
        (<HTMLInputElement>event.target).value[12] )
    } 
  }

  form1(){
    console.log(this.firstFormGroup.value);
  }
  form2(){
    console.log(this.secondFormGroup.value);
  }
  form3(){
    console.log(this.threeFormGroup.value);
  }
  form4(){
    console.log(this.forFormGroup.value);
  }
  
  

}

