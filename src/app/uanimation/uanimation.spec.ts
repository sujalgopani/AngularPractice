import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uanimation } from './uanimation';

describe('Uanimation', () => {
  let component: Uanimation;
  let fixture: ComponentFixture<Uanimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uanimation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uanimation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
