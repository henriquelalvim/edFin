import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula } from './aula';

describe('Aula', () => {
  let component: Aula;
  let fixture: ComponentFixture<Aula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
