import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {WebcamModule} from 'ngx-webcam';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-app';

  public isRegisterSelected: boolean = false;
  public wasPictureTaken: boolean = false;

  // latest snapshot
  public webcamImage: WebcamImage = null;

  public currentImage: WebcamImage = null;

  public webcamImagesList: WebcamImage[] = new Array<WebcamImage>();

  public isImageListMax: boolean = false;

  public maxImages: number = 2;

  registerClicked(){
    // console.log(this.isRegisterSelected);
    this.isRegisterSelected = !this.isRegisterSelected;
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.currentImage = webcamImage;
    this.webcamImagesList.push(webcamImage);
    if(this.webcamImagesList.length >this.maxImages){
      this.isImageListMax =true;
    }else{
      this.isImageListMax =false;
    }
    this.wasPictureTaken = true;
    // console.log(webcamImage);
  }

  closeForm(){
    this.isRegisterSelected = false;
    this.isRegisterSelected = false;
    this.wasPictureTaken = false;
    this.webcamImage = null;
    this.currentImage = null;
    this.webcamImagesList = new Array<WebcamImage>();
    this.isImageListMax = false;
    this.maxImages = 2;
  }

  onClickSubmit(){
    if(this.wasPictureTaken){
      console.log('Register method called');
      this.wasPictureTaken = false;
    }else{
      alert('Take picture first');
    }
  }

  onClickRetake(){
    this.webcamImagesList.splice(-1, 1);
    if(this.webcamImagesList.length >this.maxImages){
      this.isImageListMax =true;
    }else{
      this.isImageListMax =false;
    }
  }

  clickImg(pic){
    this.currentImage = pic;
  }

}


