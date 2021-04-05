import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficersEditComponent } from './officers-edit.component';

describe('OfficersEditComponent', () => {
  let component: OfficersEditComponent;
  let fixture: ComponentFixture<OfficersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
