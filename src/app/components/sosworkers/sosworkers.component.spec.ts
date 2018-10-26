import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SOSWorkersComponent } from './sosworkers.component';

describe('SOSWorkersComponent', () => {
  let component: SOSWorkersComponent;
  let fixture: ComponentFixture<SOSWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SOSWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SOSWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
