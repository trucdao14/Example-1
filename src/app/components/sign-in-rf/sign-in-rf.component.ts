import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.css']
})
export class SignInRfComponent implements OnInit {

  signInForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: '',
      password: '',
      remember: false,
    });

  }
  onSubmit(): void {
    console.log(this.signInForm);
  }

}
