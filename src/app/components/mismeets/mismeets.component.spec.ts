import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MismeetsComponent } from './mismeets.component';

describe('MismeetsComponent', () => {
  let component: MismeetsComponent;
  let fixture: ComponentFixture<MismeetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MismeetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MismeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
