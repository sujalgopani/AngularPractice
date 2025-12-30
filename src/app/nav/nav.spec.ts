import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navv } from './nav';

describe('Nav', () => {
  let component: Navv;
  let fixture: ComponentFixture<Navv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
