import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payrate',
  templateUrl: './payrate.component.html',
  styleUrls: ['./payrate.component.css']
})
export class PayrateComponent implements OnInit {

  paymentForm: FormGroup

  showQR: boolean = false
  showCredit: boolean = true
  
  constructor(private fb: FormBuilder, private router: Router) {
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
    if(this.paymentForm.invalid) {
      alert("Please fill form")
    } else {
      this.router.navigate(['/paymentconfirm']);
    }
  }

}
