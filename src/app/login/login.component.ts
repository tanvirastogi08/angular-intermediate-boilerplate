import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@employee-portal-services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public errorMessage: HttpErrorResponse | string;
  public loading: boolean;
  public submitted: boolean;

  public loginForm: FormGroup;
  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService) { }

  public ngOnInit() {
    this.initLoginForm();
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  // getter for easy access to form fields
  get lForm() { return this.loginForm.controls; }

  public onClickLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService
      .login(this.loginForm.controls.username.value)
        .pipe(first())
          .subscribe(
            () => this.router.navigate(['/']),
            error => {
              this.errorMessage = error;
              this.loading = false;
            });
  }
}
