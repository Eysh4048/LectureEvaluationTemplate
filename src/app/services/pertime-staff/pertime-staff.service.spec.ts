import { TestBed } from '@angular/core/testing';

import { PertimeStaffService } from './pertime-staff.service';

describe('PertimeStaffService', () => {
  let service: PertimeStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PertimeStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
