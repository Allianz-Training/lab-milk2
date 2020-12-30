import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuytologinComponent } from './buytologin.component';

describe('BuytologinComponent', () => {
  let component: BuytologinComponent;
  let fixture: ComponentFixture<BuytologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuytologinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuytologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
