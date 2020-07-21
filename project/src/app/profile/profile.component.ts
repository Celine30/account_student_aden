import { Component, OnInit } from '@angular/core';
import { ProfileService } from  '../services/profile.service'
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
      

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  breakpoint: number;

  profileConnected
  
  profileZoomSubscription : Subscription;

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private ProfileService : ProfileService , private httpclient: HttpClient) { }

  get f(){
    return this.myForm.controls;
  }

  ngOnInit(): void {
    this.ProfileService.getProfileUnitToServer(sessionStorage.getItem('email_connected'));
    this.profileZoomSubscription = this.ProfileService.ProfileZoomSubject.subscribe(
      (response) => {
          console.log(response);
          this.profileConnected=response
          console.log(this.profileConnected)
      });
    this.ProfileService.emitProfileZoomSubject()  ;
    }
  
  onFileChange(event) {
    console.log(event)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  submit(){
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource').value);
    formData.append('title', 'nomdu fichier');
    console.log(formData.get('title'));
    console.log(formData.get('file'));
   
    this.httpclient.post('http://localhost:8888/API-aden/index.php?action=back!upload', formData)
      .subscribe(res => {
        console.log(res);
        // alert('Uploaded Successfully.');
      })
  }

}
