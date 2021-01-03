import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
  petForm: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService, private api: ApiService) {
    this.petForm = fb.group({
      petName: ["",Validators.required],
      petAge: ["", Validators.required],
      type: ["DOG", Validators.required],
      breed: ["", Validators.required],
      gender: ["MALE", Validators.required]
    })
  }

  ngOnInit(): void {}

  submit(): void {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    }
    const { petName, petAge } = this.petForm.value
    if(!this.petForm.invalid) {
      this.api.post(`users/${this.userService.getUser().id}/pet`, {...this.petForm.value, name: petName, age: petAge } , headers).subscribe(res => {
        this.userService.getUser().pets.push(res)
        alert('Success')
      } , error => alert(error))
    } else alert('Please fill form')
  }

}
