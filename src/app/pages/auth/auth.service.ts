import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthResponseData } from './auth-response-data.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_KEY: string = "AIzaSyCGz0UdKhPmamtx2TtpNibFPlRfs3vzYJQ";

  user = new Subject<User>();
  isAuthenticated: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000
    );
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
    this.isAuthenticated = true;
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.API_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  signin(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.API_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(
        tap(
          resData => {
            this.handleAuthentication(
              resData.email,
              resData.localId,
              resData.idToken,
              +resData.expiresIn
            );
          }
        )
      );
  }

  logout() {
    this.user.next(null);
    this.isAuthenticated = false;
    this.router.navigate(['/auth']);
  }

  userIsAuthenticated() {
    return this.isAuthenticated;
  }
}
