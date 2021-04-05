import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficersViewComponent } from './officers-view.component';

describe('OfficersViewComponent', () => {
  let component: OfficersViewComponent;
  let fixture: ComponentFixture<OfficersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
