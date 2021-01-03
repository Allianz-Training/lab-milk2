import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-payrate',
  templateUrl: './payrate.component.html',
  styleUrls: ['./payrate.component.css']
})
export class PayrateComponent implements OnInit {

  paymentForm: FormGroup

  showQR: boolean = false
  showCredit: boolean = true
  constructor(private fb: FormBuilder, private router: Router, private api: ApiService, private userService: UserService, private cartService: CartService) {
      this.paymentForm = fb.group({
        nameoncard: ["", Validators.required],
        cardnumber: ["", Validators.required],
        mmexpired: ["", Validators.required],
        yyexpired: ["", Validators.required],
        cvv: ["", Validators.required]
      })
    }

  ngOnInit(): void {
  }

  qrCode(): void {
    this.showCredit = false
    this.showQR = true
  }

  credit(): void {
    this.showQR = false
    this.showCredit = true
  }
  submit(): void {
    const cart = this.cartService.getCart()
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    }
    if(this.paymentForm.invalid) {
      alert("Please fill form")
    } else {
      this.api.post(`users/${this.userService.getUser().id}/buy`, {cart}, headers).subscribe(res => this.router.navigate(['/paymentconfirm']), err => alert('Error') )
      
    }
  }

}
