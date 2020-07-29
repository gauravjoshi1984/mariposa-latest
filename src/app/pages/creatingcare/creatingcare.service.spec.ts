import { TestBed } from '@angular/core/testing';

import { CreatingcareService } from './creatingcare.service';

describe('CreatingcareService', () => {
  let service: CreatingcareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatingcareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
