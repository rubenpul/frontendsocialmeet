import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionbebidaComponent } from './asignacionbebida.component';

describe('AsignacionbebidaComponent', () => {
  let component: AsignacionbebidaComponent;
  let fixture: ComponentFixture<AsignacionbebidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionbebidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionbebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
