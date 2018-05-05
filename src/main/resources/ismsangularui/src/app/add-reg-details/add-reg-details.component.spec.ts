import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegDetailsComponent } from './add-reg-details.component';

describe('AddRegDetailsComponent', () => {
  let component: AddRegDetailsComponent;
  let fixture: ComponentFixture<AddRegDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRegDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
