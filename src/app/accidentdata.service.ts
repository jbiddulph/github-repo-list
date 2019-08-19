import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accident } from './models/accident.model';


@Injectable({
  providedIn: 'root'
})
export class AccidentdataService {
  apiUrl = 'https://api.tfl.gov.uk/AccidentStats/2018';
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getAccidents() {
    return this._http.get<Accident[]>(this.apiUrl);
  }
}
