import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any
  token: string

  constructor(private userService: UserService) { 
    this.user = this.userService.getUser()
    this.token = this.userService.getToken()
  }

  ngOnInit(): void {
    console.log(this.user)
    console.log(this.token)
  }

}
