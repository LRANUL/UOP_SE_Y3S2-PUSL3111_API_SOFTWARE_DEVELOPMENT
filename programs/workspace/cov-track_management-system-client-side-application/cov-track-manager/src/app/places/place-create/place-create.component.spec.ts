import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCreateComponent } from './place-create.component';

describe('PlaceCreateComponent', () => {
  let component: PlaceCreateComponent;
  let fixture: ComponentFixture<PlaceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
