import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ourproduct',
  templateUrl: './ourproduct.component.html',
  styleUrls: ['./ourproduct.component.css']
})
export class OurproductComponent implements OnInit {

  products: any

  constructor(private api : ApiService, private userService: UserService, private router: Router) {
    this.products = [];
  }

  ngOnInit(): void {
    this.api.get('products/get').subscribe(res => {
      this.products = res
    })
  }

  buy(): void {
    if(this.userService.getToken()) {
      this.router.navigate(['/cart'])
    } else {
      this.router.navigate(['/login'])
    }
  }

}
