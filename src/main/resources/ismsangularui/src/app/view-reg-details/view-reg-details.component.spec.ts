import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegDetailsComponent } from './view-reg-details.component';

describe('ViewRegDetailsComponent', () => {
  let component: ViewRegDetailsComponent;
  let fixture: ComponentFixture<ViewRegDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
