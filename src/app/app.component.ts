import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {UiService} from './services/ui/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit{
  title = 'app';
  showMenu = false;
  darkModeActive: boolean | undefined;
  sub1: Subscription | undefined;
  constructor(public ui: UiService){}

  ngOnInit(): void{
    this.sub1 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
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
}
