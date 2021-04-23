import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesEditComponent } from './places-edit.component';

describe('PlacesEditComponent', () => {
  let component: PlacesEditComponent;
  let fixture: ComponentFixture<PlacesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
