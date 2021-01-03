import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  petnames: any
  products: any
  form: FormGroup

  constructor(private api: ApiService, private userService: UserService, private api1: HttpClient, private fb: FormBuilder) { 
    this.form = fb.group({
      petId: "",
      productId: "",
      claimType: "",
    }) 
  }

  ngOnInit(): void {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    }
    this.api.get(`users/${this.userService.getUser().id}/pet`, headers ).subscribe(res => this.petnames = res , error => console.log(error))
    this.api.get(`users/${this.userService.getUser().id}/products`, headers ).subscribe(res => this.products = res , error => console.log(error))
  }
  
  onChange(): void {
    this.petnames = this.petnames.filter(pet => pet['id'] === this.form.get('petId'))
    // this.products = this.products.filter(product => product['petName'] === this.form.get('petId'))
    console.log(this.petnames)
    // console.log(this.products)
  }

}
