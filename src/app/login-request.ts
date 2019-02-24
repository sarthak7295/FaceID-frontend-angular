import { WebcamImage } from "ngx-webcam";

export class LoginRequest {
constructor(private _username: string, private _password: string, public _webcamImagesList: WebcamImage[]){

}

get userName(){
    return this._username;
}


get password(){
    return this._password;
}


get webcamImages(){
    return this._webcamImagesList;
}

set userName(value){
    this._username=value;
}


set password(value){
    this._password=value;
}

set webcamImages(value){
    this._webcamImagesList=value;
}

}
