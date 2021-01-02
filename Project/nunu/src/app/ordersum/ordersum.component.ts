import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordersum',
  templateUrl: './ordersum.component.html',
  styleUrls: ['./ordersum.component.css']
})
export class OrdersumComponent implements OnInit {
  products: []
  total: number

  constructor() { 
    this.products = []
  }

  ngOnInit(): void {
    this.products = history.state.data
   
  }

}
