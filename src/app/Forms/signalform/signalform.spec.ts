import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalform } from './signalform';

describe('Signalform', () => {
  let component: Signalform;
  let fixture: ComponentFixture<Signalform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signalform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
