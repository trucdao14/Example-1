import { Injectable, Injector } from '@angular/core';
import { inject } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FbService } from '../fb/fb.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor( public fb: FbService, public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    return this.fb.isAuth().pipe(map(
      auth => {
        if (auth){
          return true;
        }
        else {
          this.router.navigate(['/login']);

          return false;
        }
      }
    ));
  }
}
