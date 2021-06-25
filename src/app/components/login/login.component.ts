import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FbService } from '../../services/fb/fb.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  userInput = '';

  constructor(private Fb: FormBuilder, public fb: FbService, public router: Router ) {

  }
  // tslint:disable-next-line:typedef

    userFormGroup = this.Fb.group({
      email : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    } );

  ngOnInit(): void{

  }
  // tslint:disable-next-line:typedef
  login(e: { target: { email: { value: string; }; password: { value: string; }; }; }){
    this.fb.signin(e.target.email.value, e.target.password.value).pipe(first()).subscribe(
      () => {
        this.router.navigateByUrl(' ');
      }, (err) => {
        this.errorMessage = err;
        setTimeout(() => this.errorMessage = '', 2000);
      }
    );
  }

}
