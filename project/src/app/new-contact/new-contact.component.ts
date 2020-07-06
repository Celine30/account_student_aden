import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, FormArray,} from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  AddForm : FormGroup;
  ContactForm : FormGroup;
  
  constructor( private formBuilder : FormBuilder ) { }

  initForm(){
    this.AddForm = this.formBuilder.group({
      name_entreprise:['',[Validators.required]],
      name_contact:['',[Validators.required]],
      contact_tools : this.formBuilder.array([]),
      contacts : this.formBuilder.array([])
  })
  }
  
  ngOnInit(): void {
    this.initForm();
  }

  get f() { return this.AddForm.controls; }

  getTools(){
    return this.AddForm.get('contact_tools')as FormArray
  }

  onAddHobby(){
    const newHobbyControl = this.formBuilder.control('', Validators.required)
    this.getTools().push(newHobbyControl),
    console.log(newHobbyControl)
    }

  cancel(x){
    this.getTools().controls.splice(x,1);
    this.AddForm.value.contact_tools.splice(x,1)
  }

  getContacts(){
    return this.AddForm.get('contacts')as FormArray
  }

  onAddContacts(){
    // const newContactControl = this.formBuilder.control('', Validators.required)
    this.getContacts().push(this.formBuilder.group({
      toolsUnit:['',[Validators.required]],
      date:['',[Validators.required]],
    }));
    

    }

  cancelContacts(x){
    this.getContacts().controls.splice(x,1);
    this.AddForm.value.contacts.splice(x,1)
  }

  onSubmitForm(){
    const formValue = this.AddForm.value;
    console.log(formValue)
  }

}
