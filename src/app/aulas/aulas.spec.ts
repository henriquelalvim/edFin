import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aulas } from './aulas';

describe('Aulas', () => {
  let component: Aulas;
  let fixture: ComponentFixture<Aulas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aulas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aulas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
