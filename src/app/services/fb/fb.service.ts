import { Injectable } from '@angular/core';
import { AngularFireLiteFirestore, AngularFireLiteAuth} from 'angularfire-lite';
import { HttpClient } from '@angular/common/http';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(public auth: AngularFireLiteAuth, public fs: AngularFireLiteFirestore, private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  isAuth(){
    return this.auth.isAuthenticated();
  }
  // tslint:disable-next-line:typedef
  signin(email: string, password: string){
    return this.auth.signin(email, password);
  }
  // tslint:disable-next-line:typedef
  signup(email: string, pass: string){
    return this.auth.signup(email, pass);
  }
  // tslint:disable-next-line:typedef
  addCity(name: string){
    return this.auth.uid().pipe(switchMap(
      (uid) => {
        return this.fs.write(`${uid}/${name}`, {name, added: new Date()}).pipe(first());
      }
    ), first() );
  }
  // tslint:disable-next-line:typedef
  getCities() {
    return this.auth.uid().pipe(switchMap((uid) => {
      return this.fs.read(`${uid}`);
    }));
  }

}

