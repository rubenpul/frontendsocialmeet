import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarmeetComponent } from './actualizarmeet.component';

describe('ActualizarmeetComponent', () => {
  let component: ActualizarmeetComponent;
  let fixture: ComponentFixture<ActualizarmeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarmeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
