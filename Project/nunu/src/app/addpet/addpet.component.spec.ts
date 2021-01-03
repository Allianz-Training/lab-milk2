import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

import { AddpetComponent } from './addpet.component';

describe('AddpetComponent', () => {
  let component: AddpetComponent;
  let fixture: ComponentFixture<AddpetComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [FormsModule,ReactiveFormsModule],
      declarations: [ AddpetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });


  // it('form invalid when empty',()=>{
  //   component.registerForm.controls.petName.setValue('');
  //   component.registerForm.controls.petAge.setValue('');
  //   component.registerForm.controls.breed.setValue('');
  //   component.registerForm.controls.type.setValue('');
  //   component.registerForm.controls.IDcard.setValue('');
  //   component.registerForm.controls.gender.setValue('');
  //   expect(component.registerForm.valid).toBeFalsy;
  // });

  // it('petName Field',async()=>{
  //   const petname = component.registerForm.controls.petName
  //   expect(petname).toBeFalsy;
  // })

  // it('petAge', ()=>{
  //   const petAge = component.registerForm.controls.petAge;
  //   expect(petAge.valid).toBeFalsy;
  // })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
