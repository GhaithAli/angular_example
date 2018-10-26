import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SOSWorkerComponent } from './sosworker.component';

describe('SOSWorkerComponent', () => {
  let component: SOSWorkerComponent;
  let fixture: ComponentFixture<SOSWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SOSWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SOSWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
