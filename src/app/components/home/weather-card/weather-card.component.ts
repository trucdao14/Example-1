import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { FbService } from 'src/app/services/fb/fb.service';
import { WeatherService } from 'src/app/services/ui/weather.service';
import { UiService } from '../../../services/ui/ui.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  cityName: string;
  temp: number | undefined;
  state: string | undefined;
  errorMessage: string | undefined;
  darkMode: boolean | undefined;
  sub1: Subscription | undefined;
  maxTemp: number | undefined;
  minTemp: number | undefined;
  cityAdded = false;
  // tslint:disable-next-line:ban-types
  citesWeather: Object | undefined;

  @Input() addMode: any;
  @Output() cityStored = new EventEmitter();
  @Input() set city(city: string){
    this.cityName = city;
    console.log(this.cityName);
    this.weather.getWeather(city).pipe(first()).subscribe(
      (payload) => {
        this.state = payload.weather[0].main;
        this.temp = Math.ceil(payload.main.temp);
      }, (err) => {
        this.errorMessage = err.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
      );
  }


    constructor(public ui: UiService, public weather: WeatherService, public fb: FbService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

  // tslint:disable-next-line:typedef
  addCity() {
    this.fb.addCity(this.cityName).subscribe(() => {
      this.cityName = null;
      this.maxTemp = null;
      this.minTemp = null;
      this.state = null;
      this.temp = null;
      this.cityAdded = true;
      this.cityStored.emit();
      setTimeout(() => this.cityAdded = false, 2000);
    });
  }


}
