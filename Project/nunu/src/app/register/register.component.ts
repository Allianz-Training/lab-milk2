import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      firstName: ["", Validators.required],
      lastName: ["",Validators.required],
      phone: ["", [Validators.required, Validators.pattern(/^0\d{9}$/), Validators.maxLength(10)]],
      petName: ["",Validators.required],
      petAge: ["", Validators.required],
      breed: ["", Validators.required],
      type: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit1 (): void {
    if(this.registerForm.invalid) {
      alert("Please fill form")
    } else {
      this.router.navigate(['/login']);
    }
  }

}
