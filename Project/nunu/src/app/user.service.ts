import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any
  private token: string

  constructor() { 
    this.user = {}
    this.token = ""
  }

  public setUserData(userData) {
    this.user = userData.user
    this.token = userData.token
  }

  public getUser() { 
    return this.user 
  }

  public getToken(): string { 
    return this.token 
  }

  public logout(): void {
    this.user = {}
    this.token = ""
  }
}


