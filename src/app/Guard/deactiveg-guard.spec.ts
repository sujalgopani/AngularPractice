import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { deactivegGuard } from './deactiveg-guard';


describe('deactivegGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deactivegGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
