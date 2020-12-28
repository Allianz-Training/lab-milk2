import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //import form
  form: FormGroup
  

  constructor(private fb: FormBuilder , private router: Router) {
    this.form = fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required]
    })
  }
  //

  ngOnInit(): void {
  }

  submit(): void {
    if(this.form.invalid) {
      alert("Please fill form")
    } else {
      this.router.navigate(['/profile']);
    }
  }

}
