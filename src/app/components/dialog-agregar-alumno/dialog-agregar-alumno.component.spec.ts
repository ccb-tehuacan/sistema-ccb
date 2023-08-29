import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAgregarAlumnoComponent } from './dialog-agregar-alumno.component';

describe('DialogAgregarAlumnoComponent', () => {
  let component: DialogAgregarAlumnoComponent;
  let fixture: ComponentFixture<DialogAgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAgregarAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
