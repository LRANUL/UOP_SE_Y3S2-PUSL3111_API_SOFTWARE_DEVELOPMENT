import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInspectionComponent } from './health-inspection.component';

describe('HealthInspectionComponent', () => {
  let component: HealthInspectionComponent;
  let fixture: ComponentFixture<HealthInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
