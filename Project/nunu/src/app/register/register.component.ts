import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) {
    this.registerForm = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      // confirmpassword: ["",Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phone: ["", [Validators.required, Validators.pattern(/^0\d{9}$/), Validators.maxLength(10)]],
      address: [""],
      petName: ["",Validators.required],
      petAge: ["", Validators.required],
      breed: ["", Validators.required],
      type: ["", Validators.required],
      IDcard: ["", [Validators.required , Validators.pattern(/^\d{13}$/)]],
      gender: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit1 (): void {
    if(this.registerForm.invalid) {
      alert("Please fill form")
    } else {
      const { email, password, phone, address, breed, gender } = this.registerForm.value;
      const user = {
          firstname: this.registerForm.get('firstName').value ,
          lastname: this.registerForm.get('lastName').value ,
          email,
          phone,
          address,
          citizenId: this.registerForm.get('IDcard').value ,
          password
        }
      const pet = {
          name: this.registerForm.get('petName').value,
          age: this.registerForm.get('petAge').value,
          breed, gender
        }
      this.api.post('users/signup', {user, pet}).subscribe(res => this.router.navigate(['/login']), error => alert(error))
    }
  }

}
