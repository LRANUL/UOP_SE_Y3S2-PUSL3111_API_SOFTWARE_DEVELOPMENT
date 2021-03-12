import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenViewComponent } from './citizen-view.component';

describe('CitizenViewComponent', () => {
  let component: CitizenViewComponent;
  let fixture: ComponentFixture<CitizenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
