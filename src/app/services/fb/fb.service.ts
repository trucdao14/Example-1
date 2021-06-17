import { Injectable } from '@angular/core';
import { AngularFireLiteFirestore, AngularFireLiteAuth} from 'angularfire-lite';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(public auth: AngularFireLiteAuth, fs: AngularFireLiteFirestore) { }

  // tslint:disable-next-line:typedef
  isAuth(){
    return this.auth.isAuthenticated();
  }
  // tslint:disable-next-line:typedef
  signin(email: string, pass: string){
    return this.auth.signin(email, pass);
  }
  // tslint:disable-next-line:typedef
  signup(email: string, pass: string){
    return this.auth.signup(email, pass);
  }
}

