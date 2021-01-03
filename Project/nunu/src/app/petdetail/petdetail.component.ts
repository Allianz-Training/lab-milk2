import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-petdetail',
  templateUrl: './petdetail.component.html',
  styleUrls: ['./petdetail.component.css']
})
export class PetdetailComponent implements OnInit {

  test = 50
  @Input() pets: []

  constructor() { }

  ngOnInit(): void {
  }

}
