import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosBuapComponent } from './cursos-buap.component';

describe('CursosBuapComponent', () => {
  let component: CursosBuapComponent;
  let fixture: ComponentFixture<CursosBuapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosBuapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosBuapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
