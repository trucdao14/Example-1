import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FbService } from '../../services/fb/fb.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMessage = '';
  constructor(private Fb: FormBuilder, public fb: FbService, public router: Router ) { }

  userFormGroup = this.Fb.group({
    email : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
  } );

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  signup(e: { target: { email: { value: string; }; password: { value: string; }; }; }){
    this.fb.signup(e.target.email.value, e.target.password.value).pipe(first()).subscribe(
      () => {
        this.router.navigateByUrl('/login');
      }, (err) => {
        this.errorMessage = err;
        setTimeout(() => this.errorMessage = '', 2000);
      }
    );
  }
}
