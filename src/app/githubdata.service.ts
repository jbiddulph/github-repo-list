import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Github } from './models/github.model';


@Injectable({
  providedIn: 'root'
})
export class GithubdataService {
  apiUrl = 'https://api.github.com/repositories?since=364';
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getGithubs() {
    return this._http.get<Github[]>(this.apiUrl);
  }
}
