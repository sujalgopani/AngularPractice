import { TestBed } from '@angular/core/testing';
import { reference } from './testservice';


describe('Testservice', () => {
  let service: reference;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(reference);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
