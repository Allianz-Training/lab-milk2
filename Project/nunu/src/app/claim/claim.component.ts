import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  pets: any[]
  products: any
  form: FormGroup

  constructor(private api: ApiService, private userService: UserService, private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      petId: ['Open this select menu'],
      budgetId: ['Open this select menu'],
      claimType: ['OPD'],
      amount: [0]
    }) 
  }

  ngOnInit(): void {
    this.pets = this.userService.getUser().pets
  }
  
  onChange(): void {
    const petId = this.form.get('petId').value
    this.products = this.pets.filter(pet => pet.id === petId)[0].productList
  }
  submit(): void {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    }
    this.api.post(`users/${this.userService.getUser().id}/claim`, {...this.form.value } , headers).subscribe(res => {
      const index = this.pets.find((pet, index) => {
        if(pet.id === res['id']) return index
      })
      if(index) this.userService.getUser().pets.splice(index, 1, res)
      alert('Success')
      this.router.navigate(['/thank'])
    } , error => alert(error))
  }

}
