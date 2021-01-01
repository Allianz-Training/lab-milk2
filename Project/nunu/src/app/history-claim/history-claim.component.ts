import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history-claim',
  templateUrl: './history-claim.component.html',
  styleUrls: ['./history-claim.component.css']
})
export class HistoryClaimComponent implements OnInit {

  claims: any

  constructor(private api: ApiService, private userService: UserService, private api1: HttpClient) { 
    this.claims = []
  }

  ngOnInit(): void {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    }
    this.api.get(`history/${this.userService.getUser().id}/claim`, headers ).subscribe(res => this.claims = res , error => console.log(error))
  }

}
