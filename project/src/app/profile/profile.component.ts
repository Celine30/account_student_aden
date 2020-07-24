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
  
  alertSizePhoto = false;
  alertTypePhoto = false;
  divChangePicture = false;
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
    console.log('Je suis à profile avec' + sessionStorage.getItem('email_connected'));
    this.ProfileService.getProfileUnitToServer(sessionStorage.getItem('email_connected'));
    this.profileZoomSubscription = this.ProfileService.ProfileZoomSubject.subscribe(
      (response) => {
          this.profileConnected=response
          console.log(this.profileConnected)
      });
    this.ProfileService.getProfileUnitToServer(sessionStorage.getItem('email_connected'));
    this.ProfileService.emitProfileZoomSubject()  ;
    }
  
  onFileChange(event) {
    console.log(event)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
      if((this.myForm.get('fileSource').value.type)=='image/jpeg'){
        this.alertTypePhoto = false;
        this.alertSizePhoto = false
        if(this.myForm.get('fileSource').value.size>2000000){
          this.alertSizePhoto = true
        }else{
          this.alertSizePhoto = false
        }
      }else{
        this.alertTypePhoto = true
      }
    }
    console.log(this.alertTypePhoto)
    console.log(this.alertSizePhoto)
  }

  submit(){
    let i
    if(this.profileConnected['photo']==null){
      i=0
    }else{
      console.log(this.profileConnected['photo'])
      const words = this.profileConnected['photo'].split('_');
      console.log(words[1]);
      i=parseInt(words[1])+1
    }
    const titleFichier= String('photo_'+i+'_'+ sessionStorage.getItem('name_connected')+'_'+sessionStorage.getItem('ID_connected'));
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource').value);
    formData.append('title', titleFichier);
    if(!this.alertTypePhoto && !this.alertSizePhoto){
      this.httpclient.post('http://localhost:8888/API-aden/index.php?action=back!upload', formData)
        .subscribe(response => {
          console.log(response);
          this.profileConnected['photo']=response ;
          this.sendPicture(response) ; 
          this.divChangePicture = false;  

        })
    }
  }

  sendPicture(picture){
    const infoPicture = [picture,sessionStorage.getItem('email_connected')]
    this.httpclient.post('http://localhost:8888/API-aden/index.php?action=back!send_picture', JSON.stringify(infoPicture))
        .subscribe(response => {
          console.log(response);
        })
    }
  
  changePicture(){
    console.log('coucou')
    this.divChangePicture = true;

  }
  cancelchangePicture(){
    this.divChangePicture = false;
  }

}
