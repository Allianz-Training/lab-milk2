import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbuyComponent } from './loginbuy.component';

describe('LoginbuyComponent', () => {
  let component: LoginbuyComponent;
  let fixture: ComponentFixture<LoginbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
