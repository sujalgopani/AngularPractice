import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ulogin } from './ulogin';

describe('Ulogin', () => {
  let component: Ulogin;
  let fixture: ComponentFixture<Ulogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ulogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ulogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
