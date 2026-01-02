import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validationinputs } from './validationinputs';

describe('Validationinputs', () => {
  let component: Validationinputs;
  let fixture: ComponentFixture<Validationinputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Validationinputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Validationinputs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
