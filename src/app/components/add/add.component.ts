import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first, map, startWith } from 'rxjs/operators';
import { FbService } from 'src/app/services/fb/fb.service';
import {UiService} from '../../services/ui/ui.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/ui/weather.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  temp: number;
  city = 'Rome';
  state: string;
  capitals: string[] = [];
  selectedCity: any;
  cardCity: string;
  showNote = false;
  followedCM = false;
  sub1: any;

  constructor(public http: HttpClient, public fb: FbService, public weather: WeatherService) { }
  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];

  ngOnInit(): void {

    this.http.get('https://restcountries.eu/rest/v2/all').pipe((first())).subscribe((countries: Array<any> | any) => {
      countries.forEach((country: any) => {
        if (country.capital.length) {
          this.capitals.push(country.capital);
        }
      });
      this.capitals.sort();
    });
    this.sub1 = this.fb.getCities().subscribe((cities) => {
      Object.values(cities).forEach((city: any) => {
        if (city.name === 'Rome') {
          this.followedCM = true;
        }
      });
    });
  }

  // tslint:disable-next-line:typedef
  selectCity(city: string) {
    if (this.capitals.includes(city)){
      this.cardCity = city;
      this.showNote = false;
    }else if (city){
      this.showNote = true;
      alert (city);
    }
  }
  }
