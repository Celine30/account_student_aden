import { Component, OnInit } from '@angular/core';
import { ProfileService } from  '../services/profile.service'
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
      

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  breakpoint: number;
  profileConnected
  variableCV  
  alertSizePhoto = false;
  alertTypePhoto = false;
  alertSizeCv = false;
  alertTypeCv = false;
  divChangePicture = false;
  divChangeCv = false;
  profileZoomSubscription : Subscription;

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  myFormCv = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private sanitizer: DomSanitizer,private ProfileService : ProfileService , private httpclient: HttpClient) { }

  get f(){
    return this.myForm.controls;
  }

  get fCv(){
    return this.myFormCv.controls;
  }

  onResetCv(): void {
    this.resetFormCv();
  }

  resetFormCv(value: any = undefined): void {
    this.myFormCv.reset(value);
  }

  onReset(): void {
    this.resetForm();
  }

  resetForm(value: any = undefined): void {
    this.myForm.reset(value);
  }

  ngOnInit(): void {
    this.ProfileService.getProfileUnitToServer(sessionStorage.getItem('email_connected'));
    this.profileZoomSubscription = this.ProfileService.ProfileZoomSubject.subscribe(
      (response) => {
          this.profileConnected=response
        });
    this.ProfileService.getProfileUnitToServer(sessionStorage.getItem('email_connected'));
    this.ProfileService.emitProfileZoomSubject() ;
    }
  
  photoURLCv(X) {
      return this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:8888/API-aden/upload/"+X+"#toolbar=auto");
    }
  
  onLoad(){
    // console.log('coucou');
    // var iframe = document.getElementById("iframepdf");
    // var iWindow = (<HTMLIFrameElement> iframe).contentWindow;
    // console.log(iWindow)
  }

  onFileChange(event) {
    this.alertSizePhoto = false
    this.alertTypePhoto = false
    // console.log(event)
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
        this.alertSizePhoto = false
      }
    }
    // console.log(this.alertTypePhoto)
    // console.log(this.alertSizePhoto)
  }

  onFileChangeB(event) {
    console.log(event)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myFormCv.patchValue({
        fileSource: file
      });
      if((this.myFormCv.get('fileSource').value.type)=='application/pdf'){
        this.alertTypeCv = false;
        this.alertSizeCv = false;
        if(this.myFormCv.get('fileSource').value.size>2000000){
          this.alertSizeCv = true;
        }else{
          this.alertSizeCv = false
        }
      }else{
        this.alertTypeCv = true;
        this.alertSizeCv = false
      }
    }
    // console.log(this.alertTypeCv)
    // console.log(this.alertSizeCv)
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
      this.httpclient.post('http://localhost:8888/API-aden/index.php?action=back!uploadPH', formData)
        .subscribe(response => {
          console.log(response);
          this.profileConnected['photo']=response ;
          this.sendPicture(response) ; 
          this.divChangePicture = false; 
          this.onReset();
        })
    }
  }

  submitCv(){
    let i
    if(this.profileConnected['CV']==null){
      i=0
    }else{
      console.log(this.profileConnected['CV'])
      const words = this.profileConnected['CV'].split('_');
      console.log(words[1]);
      i=parseInt(words[1])+1
    }
    const titleFichier= String('cv_'+i+'_'+ sessionStorage.getItem('name_connected')+'_'+sessionStorage.getItem('ID_connected'));
    const formData = new FormData();
    formData.append('file', this.myFormCv.get('fileSource').value);
    formData.append('title', titleFichier);
    if(!this.alertTypeCv && !this.alertSizeCv){
      this.httpclient.post('http://localhost:8888/API-aden/index.php?action=back!uploadCV', formData)
        .subscribe(response => {
          console.log(response);
          this.profileConnected['CV']=response ;
          this.sendCv(response) ; 
          this.variableCV=this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:8888/API-aden/upload/"+this.profileConnected['CV'] +"#toolbar=0")
          console.log(this.variableCV)
          this.divChangeCv = false; 
          this.onResetCv();
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
  
  sendCv(cv){
    const infoCv = [cv,sessionStorage.getItem('email_connected')]
    this.httpclient.post('http://localhost:8888/API-aden/index.php?action=back!send_cv', JSON.stringify(infoCv))
        .subscribe(response => {
          console.log(response);
        })
    }

  changePicture(){

    this.divChangePicture = true;
  }

  changeCv(){
    console.log('coucou')
    this.divChangeCv = true;
  }

  cancelchangePicture(){
    this.divChangePicture = false;
  }

  cancelchangeCv(){
    this.divChangeCv = false;
  }
}
