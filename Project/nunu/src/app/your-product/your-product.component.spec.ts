import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProductComponent } from './your-product.component';

describe('YourProductComponent', () => {
  let component: YourProductComponent;
  let fixture: ComponentFixture<YourProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
