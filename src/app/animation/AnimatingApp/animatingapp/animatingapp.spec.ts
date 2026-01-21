import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animatingapp } from './animatingapp';

describe('Animatingapp', () => {
  let component: Animatingapp;
  let fixture: ComponentFixture<Animatingapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animatingapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animatingapp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
