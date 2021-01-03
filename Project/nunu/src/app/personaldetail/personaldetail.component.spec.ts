import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaldetailComponent } from './personaldetail.component';

describe('PersonaldetailComponent', () => {
  let component: PersonaldetailComponent;
  let fixture: ComponentFixture<PersonaldetailComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaldetailComponent ]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldetailComponent);
    component = fixture.componentInstance;
    const detailMock = fixture.debugElement.componentInstance;
    detailMock.user = [{firstname:'jinny'}];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
