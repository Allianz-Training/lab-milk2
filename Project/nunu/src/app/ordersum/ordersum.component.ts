import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordersum',
  templateUrl: './ordersum.component.html',
  styleUrls: ['./ordersum.component.css']
})
export class OrdersumComponent implements OnInit {
  products: any[]
  total: number

  constructor() { 
    this.products = []
    this.total = 0
  }

  ngOnInit(): void {
    this.products = history.state.data
    // this.total = this.products.map(p => p)
    const tmp: number[] = this.products.map(p => p['price'])
    this.total = tmp.reduce((a , b) => a + b)
  }

}
