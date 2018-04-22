import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstloadComponent } from './firstload.component';

describe('FirstloadComponent', () => {
  let component: FirstloadComponent;
  let fixture: ComponentFixture<FirstloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
