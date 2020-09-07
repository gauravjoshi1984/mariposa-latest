import { TestBed } from '@angular/core/testing';

import { MariposaLoginGuard } from './mariposa-login.guard';

describe('MariposaLoginGuard', () => {
  let guard: MariposaLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MariposaLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
