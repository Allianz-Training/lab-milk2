import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {
  products: [] 
  petname: any

  constructor(private api : ApiService, private userService: UserService) {
    this.products = []
    this.petname = []
  }

  ngOnInit(): void {
    this.products = history.state.data

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    }
    this.api.get(`users/${this.userService.getUser().id}/pet`, headers ).subscribe(res => this.petname = res , error => console.log(error));
  }

  delete(): void {

  }


    // this.products = history.state.data
    // console.log(history.state)
    // console.log(this.productcart)
    // console.log(this.router.getCurrentNavigation().extras.state)
  }


