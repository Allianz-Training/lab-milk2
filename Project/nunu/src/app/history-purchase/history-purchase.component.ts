import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-history-purchase',
  templateUrl: './history-purchase.component.html',
  styleUrls: ['./history-purchase.component.css']
})
export class HistoryPurchaseComponent implements OnInit {

  purchased: any

  constructor(private api: ApiService, private userService: UserService) { 
    this.purchased = []
  }

  ngOnInit(): void {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    }
    this.api.get(`history/${this.userService.getUser().id}/purchase`, headers ).subscribe(res => this.purchased = res , error => console.log(error))
  }

}
