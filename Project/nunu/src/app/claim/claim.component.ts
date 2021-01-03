import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
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

  constructor(private api: ApiService, private userService: UserService, private fb: FormBuilder) { 
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
  }
  
  onChange(): void {
  }

}
