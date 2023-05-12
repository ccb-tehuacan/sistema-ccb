import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  
  
  constructor( 
    private formBuilder :  UntypedFormBuilder,
    private router : Router
  ){ }
  
  title = 'front-ccb1';

  qrResultString  ?: string
 
  form = this.formBuilder.group({
    resultado : ['']
  })

  onResultChange(){
    this.form.controls['resultado'].enable({emitEvent:false});
    this.form.controls['resultado'].valueChanges
    var link = this.form.controls['resultado'].value()
    .pipe(
      tap( ()=>{
          this.router.navigate([link])
      }) 
    )
  }

  

  clearResult():void{
    this.qrResultString = '';
  }

  onCodeResult(resultString : string) {
    this.qrResultString = resultString
    console.log(this.qrResultString)
    // this.router.navigate(['https://google.com/'])
  }

  ngOnInit():void{
    //this.onResultChange()
    console.log(this.form.controls['resultado'].value)
  }
}
