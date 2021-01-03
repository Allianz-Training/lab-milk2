import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loginbuy',
  templateUrl: './loginbuy.component.html',
  styleUrls: ['./loginbuy.component.css']
})
export class LoginbuyComponent implements OnInit {

  products: any
  productcart = []
 
  constructor(private api : ApiService, private userService: UserService) { 
    this.products = [];
  }

  ngOnInit(): void {
    this.api.get('products/get').subscribe(res => {
      this.products = res
    })
  }
  addcart(a: Object): void {
    this.productcart.push(a)
  }

  delete(index: number): void {
    this.productcart.splice(index, 1);
  }

}
