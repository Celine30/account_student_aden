import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  formGroup: FormGroup;
  
  identityFormGroup: FormGroup;
  // inforFormGroup: FormGroup;
  // formaFormGroup: FormGroup;
  // creatFormGroup: FormGroup;

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

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
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
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
        }),
        this._formBuilder.group({
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
        }),
        this._formBuilder.group({
          training: ['', Validators.required],
          funding: ['', Validators.required]
        }),
        this._formBuilder.group({
          password: ['', Validators.required]
        }),
      ])
    });

    // this.identityFormGroup = this._formBuilder.group({
    //   name: ['', Validators.required],
    //   firstname: ['', Validators.required],
    //   email: ['', Validators.required],
    //   phone1: ['', Validators.required],
    //   phone2: ['', Validators.required],
    //   adress: ['', Validators.required],
    //   postal: ['', Validators.required],
    //   city: ['', Validators.required],
    //   department: ['', Validators.required],
    //   region: ['', Validators.required]
    // });
    // this.inforFormGroup= this._formBuilder.group({
    //   birthday: ['', Validators.required],
    //   citybirthday: ['', Validators.required],
    //   countrybirthday: ['', Validators.required],
    //   nationality: ['', Validators.required],
    //   statut: ['', Validators.required],
    //   numberSecu: ['', Validators.required],
    //   licence: ['', Validators.required],
    //   vehicule: ['', Validators.required],
    //   mobile: ['', Validators.required],
    //   handicapped: ['', Validators.required]
    // });
    // this.formaFormGroup= this._formBuilder.group({
    //   training: ['', Validators.required],
    //   funding: ['', Validators.required]
    // });
    // this.creatFormGroup= this._formBuilder.group({
    //   password: ['', Validators.required]
    // });


  }
  form1(){
    console.log(this.firstFormGroup.value);
  }
  form2(){
    console.log(this.secondFormGroup.value);
  }
  
  onSubmit(){
    console.log('envoyer');
    console.log(this.formGroup.value)
  }
}
