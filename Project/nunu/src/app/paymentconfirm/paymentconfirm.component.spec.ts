import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentconfirmComponent } from './paymentconfirm.component';

describe('PaymentconfirmComponent', () => {
  let component: PaymentconfirmComponent;
  let fixture: ComponentFixture<PaymentconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentconfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
