import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private Fb: FormBuilder ) { }

  userFormGroup = this.Fb.group({
    email : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
  } );

  ngOnInit(): void {
  }

}
