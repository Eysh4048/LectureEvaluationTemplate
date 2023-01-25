import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertimeStaffComponent } from './pertime-staff.component';

describe('PertimeStaffComponent', () => {
  let component: PertimeStaffComponent;
  let fixture: ComponentFixture<PertimeStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PertimeStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PertimeStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
