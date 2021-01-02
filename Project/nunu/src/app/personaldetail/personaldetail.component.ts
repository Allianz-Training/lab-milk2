import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldetail',
  templateUrl: './personaldetail.component.html',
  styleUrls: ['./personaldetail.component.css']
})
export class PersonaldetailComponent implements OnInit {

  @Input() user: any
  
  constructor() { }

  ngOnInit(): void {
  }

}
