import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productcart: any[]
  constructor() {
    this.productcart = []
  }

  ngOnInit(): void {
    this.productcart = history.state.data
  }

}
