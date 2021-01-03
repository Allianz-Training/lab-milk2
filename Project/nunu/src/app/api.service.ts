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

  public get(path: string, headers?: any) {
    return this.api.get(`http://localhost:8080/${path}`, {headers})
  }

  public post(path: string, body: any, headers?: any) {
    return this.api.post(`http://localhost:8080/${path}`, body, {headers})
  }
}


