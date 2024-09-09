import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheMaintenaceComponent } from './sche-maintenace.component';

describe('ScheMaintenaceComponent', () => {
  let component: ScheMaintenaceComponent;
  let fixture: ComponentFixture<ScheMaintenaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheMaintenaceComponent]
    });
    fixture = TestBed.createComponent(ScheMaintenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
