import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.css']
})
export class Navbar3Component implements OnInit {

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
  }

  logout(): void {
    const isConfirm = confirm("Are you sure to LOGOUT?");
    if (isConfirm) {
      this.userService.logout()
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/profile']);
  }
}
}

