import { TestBed } from '@angular/core/testing';

import { AcademicStaffService } from './academic-staff.service';

describe('AcademicStaffService', () => {
  let service: AcademicStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
