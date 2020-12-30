import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private api: HttpClient) { }
  
  public getApi() {
    return this.api.get('https://swapi.dev/api/people/')
  }
}


