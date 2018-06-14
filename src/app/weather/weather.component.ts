import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data: any = {};
  forecast: any = {};
  condition: any = {};
  location: any = {};
  current: any = {};
  temp = 0;
  icon = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
   this.get('42.882004,74.582748');
  }
  get(lat) {
    const url = `http://api.apixu.com/v1/forecast.json?key=995f1bb2627544a3a3f101935181406&q=` + lat + `&days=7`;
    this.http.get(url).subscribe(res => {
      this.data = res;
      this.forecast = this.data.forecast.forecastday;
      this.condition = this.data.current.condition;
      this.location = this.data.location;
      this.current = this.data.current;
      console.log(this.data);
    });
  }
}
