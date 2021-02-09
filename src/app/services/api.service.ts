import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlBase = environment.url;
  apiKey = environment.apiKey;
  queryBase = environment.queryBase;

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(this.urlBase + url + this.apiKey);
  }

  getFiltered(url: string, query: string) {
    return this.http.get(this.urlBase + url + this.apiKey + this.queryBase + query);
  }

  post() {

  }
}
