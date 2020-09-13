import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusmeetComponent } from './statusmeet.component';

describe('StatusmeetComponent', () => {
  let component: StatusmeetComponent;
  let fixture: ComponentFixture<StatusmeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusmeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
