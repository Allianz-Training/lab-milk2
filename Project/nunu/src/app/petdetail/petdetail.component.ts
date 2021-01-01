import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-petdetail',
  templateUrl: './petdetail.component.html',
  styleUrls: ['./petdetail.component.css']
})
export class PetdetailComponent implements OnInit {

  @Input() pets: []

  constructor() { }

  ngOnInit(): void {
  }

}
