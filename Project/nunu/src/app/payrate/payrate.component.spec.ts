import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PayrateComponent } from './payrate.component';

describe('PayrateComponent', () => {
  let component: PayrateComponent;
  let fixture: ComponentFixture<PayrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [FormsModule,ReactiveFormsModule],
      declarations: [ PayrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
