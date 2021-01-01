import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldetail',
  templateUrl: './personaldetail.component.html',
  styleUrls: ['./personaldetail.component.css']
})
export class PersonaldetailComponent implements OnInit {

  @Input() name: string
  @Input() email: string
  @Input() citizenId: string

  constructor() { }

  ngOnInit(): void {
  }

}
