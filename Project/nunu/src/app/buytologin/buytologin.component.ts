import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-buytologin',
  templateUrl: './buytologin.component.html',
  styleUrls: ['./buytologin.component.css']
})
export class BuytologinComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder , private router: Router) { 
    this.form = fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required]
  })
}

  ngOnInit(): void {
  }
  submit(): void {
    if(this.form.invalid) {
      alert("Please fill form")
    } else {
      this.router.navigate(['/loginbuy']);
    }
  }

}
