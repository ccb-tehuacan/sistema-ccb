import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogAlumnoComponent } from '../dialog-alumno/dialog-alumno.component';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  title = 'front-ccb1';

  qrResultString?: string

  form = this.formBuilder.group({
    resultado: ['']
  })

  clearResult(): void {
    this.qrResultString = '';
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString
    console.log(this.qrResultString)
    window.location.href = this.qrResultString

    

    //window.location.href = '/alumno'



  }


  

}