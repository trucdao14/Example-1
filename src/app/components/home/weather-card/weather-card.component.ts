import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {UiService} from '../../../services/ui/ui.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  darkMode: boolean | undefined;
  sub1: Subscription | undefined;

  constructor(public ui: UiService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }


}
