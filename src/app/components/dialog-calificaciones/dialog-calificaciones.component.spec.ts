import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCalificacionesComponent } from './dialog-calificaciones.component';

describe('DialogCalificacionesComponent', () => {
  let component: DialogCalificacionesComponent;
  let fixture: ComponentFixture<DialogCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCalificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
