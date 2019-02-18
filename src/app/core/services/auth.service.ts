import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(username: string): Observable<object> {
    const user = {
      currentUser: username
    };
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(user));
    return of(user);
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
