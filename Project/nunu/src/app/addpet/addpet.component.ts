import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
  registerForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
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

}
