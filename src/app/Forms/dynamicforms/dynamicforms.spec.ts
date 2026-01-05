import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicforms } from './dynamicforms';

describe('Dynamicforms', () => {
  let component: Dynamicforms;
  let fixture: ComponentFixture<Dynamicforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamicforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamicforms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
