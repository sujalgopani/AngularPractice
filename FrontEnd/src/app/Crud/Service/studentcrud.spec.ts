import { TestBed } from '@angular/core/testing';

import { Studentcrud } from './studentcrud';

describe('Studentcrud', () => {
  let service: Studentcrud;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Studentcrud);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
