import { HttpClientModule } from '@angular/common/http';
import { componentFactoryName } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
   
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ FormsModule , ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('form invalid when empty', () => {
  //   expect(component.form.valid).toBeFalsy();
  // });

  // it('email field validity', () => {
  //   let errors = {};
  //   let email = component.form.controls['email'];
  //   expect(email.valid).toBeFalsy();

  //   // Set email to something correct
  //   email.setValue("test@example.com");
  //   errors = email.errors || {};
  //   expect(errors['required']).toBeFalsy();
  //   expect(errors['pattern']).toBeFalsy();
  // });

  // it('Password field validity', () => {
  //   let password = component.form.controls['password'];
  //   expect(password.valid).toBeFalsy();
  //   //required password
  //    let errors = password.errors || {};
  //    expect(errors['required']).toBeFalsy;
  // });
  

  // // it('submitting a form', () => {
  // //   expect(component.form.valid).toBeFalsy();
  // //   component.form.controls['email'].setValue("user@email.com");
  // //   component.form.controls['password'].setValue("1234");
  // //   expect(component.form.valid).toBeTruthy();
  // //   component.submit();
  // // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
