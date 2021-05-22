import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${environment.base_url}/all.json`);
  }

  getHeroeById(id) {
    return this.http.get(`${environment.base_url}/id/${id}.json`);
  }
}
