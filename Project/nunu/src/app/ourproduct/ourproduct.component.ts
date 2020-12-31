import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-ourproduct',
  templateUrl: './ourproduct.component.html',
  styleUrls: ['./ourproduct.component.css']
})
export class OurproductComponent implements OnInit {

  products: any

  constructor(private api : ApiService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.api.get('products/get').subscribe(res => {
      this.products = res
    })
  }

  buy(productId: string): void {
    console.log(this.products.filter(p => p.id === productId)[0])
  }

}
