import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { forchildGuard } from './forchild-guard';

describe('forchildGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => forchildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
