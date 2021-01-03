import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

import { CartOrderComponent } from './cart-order.component';

describe('CartOrderComponent', () => {
  let component: CartOrderComponent;
  let fixture: ComponentFixture<CartOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,FormsModule,ReactiveFormsModule,RouterTestingModule],
      declarations: [ CartOrderComponent ],
      providers : [
        { provide : ApiService , useValue : {}} , { provide:UserService , useValue: {}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
