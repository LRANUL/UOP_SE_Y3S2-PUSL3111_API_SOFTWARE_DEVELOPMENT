import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesViewComponent } from './places-view.component';

describe('PlacesViewComponent', () => {
  let component: PlacesViewComponent;
  let fixture: ComponentFixture<PlacesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
