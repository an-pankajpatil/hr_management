import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(public http: HttpClient) {}

  getWeather(): Observable<WeatherData> {
    return this.http
      .get<WeatherData>(
        `${environment.WEATHER_API}${environment.WEATHER_API_KEY}`
      )
      .pipe(
        map((data) => {
          return this.formatData(data);
        })
      );
  }
  formatData(data: WeatherData) {
    data.weather[0].icon = `${environment.ICON_URL}${data.weather[0].icon}`;
    data.main.temp = Math.round(data.main.temp - 273.15);
    return data;
  }
}
