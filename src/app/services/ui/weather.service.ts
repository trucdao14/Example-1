import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly apiKey = '76f26ad67abe6fe8524637bea3fb4b68';

  constructor(public http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseURL}${city}&units=metric&APPID=${this.apiKey}`).pipe(first());
  }

}
