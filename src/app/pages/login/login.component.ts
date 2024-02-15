import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder : UntypedFormBuilder,
  ){  }

  logos: string = '/assets/img/logos.png';
  hide = true;
  
  formLogin : UntypedFormGroup = this.formBuilder.group({
    username  : [{ value: '', disabled: false }, Validators.required],
    password  : [{ value: '', disabled: false }, [Validators.required]],
  })

  login(){
    
  }

}
