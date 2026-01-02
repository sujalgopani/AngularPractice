import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validationinputreactive } from './validationinputreactive';

describe('Validationinputreactive', () => {
  let component: Validationinputreactive;
  let fixture: ComponentFixture<Validationinputreactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Validationinputreactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Validationinputreactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
