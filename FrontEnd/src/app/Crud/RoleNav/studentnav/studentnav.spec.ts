import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentnav } from './studentnav';

describe('Studentnav', () => {
  let component: Studentnav;
  let fixture: ComponentFixture<Studentnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentnav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentnav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
