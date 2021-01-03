import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  products = []
  total: number
  constructor() {
    this.products = []
    this.total = 0
  }

  ngOnInit(): void {
    this.products = history.state.data
    const tmp: number[] = this.products.map(p => p['price'])
    this.total = tmp.reduce((a , b) => a + b)
  }

}
