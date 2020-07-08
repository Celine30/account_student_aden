import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, FormArray,} from '@angular/forms';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http'

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  AddForm : FormGroup;
  ContactForm : FormGroup;
  addContact=false
  NewEntreprise:object;

  constructor( private formBuilder : FormBuilder,  private httpClient : HttpClient ) { 
  }

  initForm(){
    this.AddForm = this.formBuilder.group({
      name_entreprise:['',[Validators.required]],
      name_contact:['',[Validators.required]],
      contact_tools : this.formBuilder.array([]),
    })
  }

  ngOnInit(): void {
    this.initForm();
  }

  get f() { return this.AddForm.controls; }

  getTools(){
    return this.AddForm.get('contact_tools')as FormArray
  }

  onAddTools(){
   //const newHobbyControl = this.formBuilder.control('', Validators.required)
    this.getTools().push(this.formBuilder.group({
      mode_contact:['',[Validators.required]],
      contact:['',[Validators.required]],
    }));
    this.addContact=true
  }

  cancel(x){
    this.getTools().controls.splice(x,1);
    this.AddForm.value.contact_tools.splice(x,1)
    if(this.getTools().controls.length==0){
      this.addContact=false
    }
  }

  onSubmitForm(){
    this.NewEntreprise = this.AddForm.value;
    this.NewEntreprise['ID_student']=localStorage.getItem('ID_connected')
    this.httpClient
    .post('http://localhost:8888/API-aden/index.php?action=back!newEntreprise', JSON.stringify(this.NewEntreprise))
    .subscribe(
            (response) =>{
              console.log(response);
            },
            (error) => {
                console.log(Object.values(error));
            })
  }

}
