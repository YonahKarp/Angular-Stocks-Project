import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { map } from 'rxjs/add/operator/map'
 
@Injectable({
  providedIn: 'root',
})
export class CountryService {

  constructor(private http: Http){

  }

  getCountries(): Observable<string[]> {
    return this.http
      .get("https://restcountries.eu/rest/v2/all?fields=name")
      .pipe(
        map(res => res.json().filter((e,i)=> i % 8 == 0 || i == 239).map(e => e.name)) // or any other operator
      )
  }
}