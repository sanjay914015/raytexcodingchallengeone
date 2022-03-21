import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

    getWeather(location:any)
    {
      return this.http.get(
          'http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=a985c95123msh552389f682feec8p1a052bjsn804d71928926'
      );
//       const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://community-open-weather-map.p.rapidapi.com/weather',
//   qs: {
//     q: 'London,uk',
//     lat: '0',
//     lon: '0',
//     callback: 'test',
//     id: '2172797',
//     lang: 'null',
//     units: 'imperial',
//     mode: 'xml'
//   },
//   headers: {
//     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//     'x-rapidapi-key': 'a985c95123msh552389f682feec8p1a052bjsn804d71928926',
//     useQueryString: true
//   }
// }
// return options;

  }
}
