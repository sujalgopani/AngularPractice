import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpreq } from './httpreq';

describe('Httpreq', () => {
  let component: Httpreq;
  let fixture: ComponentFixture<Httpreq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpreq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpreq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
