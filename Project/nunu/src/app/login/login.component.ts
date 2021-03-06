import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //import form
  form: FormGroup
  page: string
  constructor(private fb: FormBuilder , private router: Router, private api : ApiService, private user: UserService ) {
    this.form = fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required]
    })
    
  }

  ngOnInit(): void {
    this.page =  history.state.page || '/profile';
  }

  submit(): void {
    if(this.form.invalid) {
      alert("Please fill form")
    } else {
      this.api.post("users/login", this.form.value).subscribe(data => {
          this.user.setUserData(data)
          this.router.navigate([this.page]);
        }, error => {
          alert('username or password is wrong')
        })
      }
    }

}
