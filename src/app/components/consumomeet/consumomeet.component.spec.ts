import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumomeetComponent } from './consumomeet.component';

describe('ConsumomeetComponent', () => {
  let component: ConsumomeetComponent;
  let fixture: ComponentFixture<ConsumomeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumomeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumomeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
