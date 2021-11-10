import { TestBed } from '@angular/core/testing';

import { AuthadminGuard } from './authadmin.guard';

describe('AuthadminGuard', () => {
  let guard: AuthadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
