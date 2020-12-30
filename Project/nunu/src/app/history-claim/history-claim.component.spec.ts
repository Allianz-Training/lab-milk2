import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryClaimComponent } from './history-claim.component';

describe('HistoryClaimComponent', () => {
  let component: HistoryClaimComponent;
  let fixture: ComponentFixture<HistoryClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
