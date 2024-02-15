import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosUnamComponent } from './cursos-unam.component';

describe('CursosUnamComponent', () => {
  let component: CursosUnamComponent;
  let fixture: ComponentFixture<CursosUnamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosUnamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosUnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
