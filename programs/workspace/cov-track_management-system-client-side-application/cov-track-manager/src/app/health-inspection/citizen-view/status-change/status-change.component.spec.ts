import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusChangeComponent } from './status-change.component';

describe('StatusChangeComponent', () => {
  let component: StatusChangeComponent;
  let fixture: ComponentFixture<StatusChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
