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
      confirmpassword: ["",Validators.required],
      firstName: ["", Validators.required],
      lastName: ["",Validators.required],
      phone: ["", [Validators.required, Validators.pattern(/^0\d{9}$/), Validators.maxLength(10)]],
      address: [""],
      petName: ["",Validators.required],
      petAge: ["", Validators.required],
      breed: ["", Validators.required],
      type: ["", Validators.required],
      IDcard: ["", Validators.required],
      gender: ["", Validators.required]
    }
    )
  }

  ngOnInit(): void {
  }

  submit1 (): void {
    if(this.registerForm.invalid) {
      alert("Please fill form")
    } else {
      const { firstName, lastName, email, password, phone, address,
        petName, petAge, breed, gender
      } = this.registerForm.value;
      const body = {
        user: {
          firstname: firstName,
          lastname: lastName,
          email,
          phone,
          address,
          citizenId: this.registerForm.get('IDcard'),
          password
        },
        pet: {
          name: petName,
          age: petAge,
          breed, gender
        }
      }
      console.log(body)
      // this.api.post('users/signup', body).subscribe(res => this.router.navigate(['/login']), error => alert(error))
    }
  }

}
