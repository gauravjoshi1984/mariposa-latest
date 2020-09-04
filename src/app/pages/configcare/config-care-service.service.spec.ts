import { TestBed } from '@angular/core/testing';

import { ConfigCareServiceService } from './config-care-service.service';

describe('ConfigCareServiceService', () => {
  let service: ConfigCareServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigCareServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
