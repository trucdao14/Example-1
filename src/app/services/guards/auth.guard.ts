import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FbService } from '../fb/fb.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  router: any;
  constructor(public fb: FbService, router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.fb.isAuth().pipe(map(
      auth => {
        if (!auth){
          return true;
        }else{
          this.router.navigate(['/']);
          return false;
        }
      }
    ));
  }
}
