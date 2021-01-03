import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {
  products
  petname: any
  form: FormGroup
  @Input()
  productcart

  constructor(private api : ApiService, private userService: UserService, private fb: FormBuilder, private router: Router, private cart: CartService) {
    this.products = []
    this.petname = []
    this.form = fb.group({
      petId: ['']
    })
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

  submit() {
    const productcart = this.productcart
    this.cart.getCart().push({ productId: this.products[0].id, petId: this.form.get('petId').value })
    this.router.navigate(['/payrate'], {state: productcart })
  }
  
}


