import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {UiService} from './services/ui/ui.service';
import { AngularFireLiteFirestore, AngularFireLiteAuth} from 'angularfire-lite';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit{
  title = 'app';
  userEmail = '';
  showMenu = false;
  darkModeActive: boolean | undefined;
  sub1: Subscription | undefined;
  constructor(public ui: UiService, public auth: AngularFireLiteAuth, public router: Router){}

  ngOnInit(): void{
    this.sub1 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
    this.auth.userData().subscribe((user) => {
      this.userEmail = user.email;
    });
  }
 // tslint:disable-next-line:typedef
  modeToggleSwitch(){
    this.ui.darkModeState.next(!this.darkModeActive);
  }
  // tslint:disable-next-line:typedef
  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
  // tslint:disable-next-line:typedef
  logout(){
    this.toggleMenu();
    this.router.navigate(['/login']);
    this.auth.signout();
  }
}
