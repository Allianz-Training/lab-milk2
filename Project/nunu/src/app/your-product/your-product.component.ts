import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// api//
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
//

@Component({
  selector: 'app-your-product',
  templateUrl: './your-product.component.html',
  styleUrls: ['./your-product.component.css']
})
export class YourProductComponent implements OnInit {

  products: any
  
  constructor(private router: Router, private api : ApiService, private userService: UserService) { 
    this.products = []
  } 

  ngOnInit(): void {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    }
    this.api.get(`users/${this.userService.getUser().id}/products`, headers ).subscribe(res => this.products = res , error => console.log(error));
  }




  submitcancel(): void {
    const isConfirm = confirm("Are you sure to cancel this product?");
    if (isConfirm) {
      this.router.navigate(['/confirmcancel']);
    }
    else {
      this.router.navigate(['/yourproduct']);
    }
  } 

}
