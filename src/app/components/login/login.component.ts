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

  constructor(private Fb: FormBuilder ) {

  }
  // tslint:disable-next-line:typedef

    userFormGroup = this.Fb.group({
      email : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    } );

  ngOnInit(): void{

  }

}
