import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowhomeComponent } from './belowhome.component';

describe('BelowhomeComponent', () => {
  let component: BelowhomeComponent;
  let fixture: ComponentFixture<BelowhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelowhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelowhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
