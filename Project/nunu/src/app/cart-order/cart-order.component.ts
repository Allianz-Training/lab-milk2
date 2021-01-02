import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {
  products: any
  @Input() productcart 

  constructor(private api : ApiService, private userService: UserService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.api.get('products/get').subscribe(res => {
      this.products = res
    })
    console.log(this.productcart)
  }

}
