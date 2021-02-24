import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { AuthResponseData } from './auth-response-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>;

    this.isLoading = true;

    if (!form.valid) {
      return;
    }

    authObservable = this.authService.signin(email, password);

    authObservable.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
