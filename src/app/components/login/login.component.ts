import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  userFormGroup: FormGroup | undefined;
  constructor(private Fb: FormBuilder ) {
    this.creatForm();
  }
  // tslint:disable-next-line:typedef
  creatForm(){
    this.userFormGroup = this.Fb.group({
      email : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    } );
  }
  ngOnInit(): void{

  }
}
