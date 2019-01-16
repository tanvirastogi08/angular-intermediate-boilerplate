import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IEmployee } from '../../shared/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'api/employee.json';

  constructor(private _http: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(this.baseUrl)
      .pipe(
        tap(emp => console.log('Received data:' + JSON.stringify(emp))),
        catchError(this.handleError)
      );

    // TODO: explain why to return from the same line
    // return [{
    //     'empId': 'DFG1234',
    //     'designation': 'Developer',
    //     'firstName': 'Romin',
    //     'lastName': 'Irani',
    //     'fullName': 'Romin Irani',
    //     'location': 'CA',
    //     'phoneNumber': '408-1234567',
    //     'emailAddress': 'romin.k.irani@gmail.com',
    //     'profileImageUrl': 'https://randomuser.me/api/portraits/lego/2.jpg',
    //     'csat': 5
    //   },
    //   {
    //     'empId': 'DFG3214',
    //     'designation': 'Developer',
    //     'firstName': 'Neil',
    //     'lastName': 'Irani',
    //     'fullName': 'Neil Irani',
    //     'location': 'CA',
    //     'phoneNumber': '408-1111111',
    //     'emailAddress': 'neilrirani@gmail.com',
    //     'profileImageUrl': 'https://randomuser.me/api/portraits/lego/6.jpg',
    //     'csat': 5
    //   },
    //   {
    //     'empId': 'DFG3234',
    //     'designation': 'Program Directory',
    //     'firstName': 'Tom',
    //     'lastName': 'Hanks',
    //     'fullName': 'Tom Hanks',
    //     'location': 'CA',
    //     'phoneNumber': '408-2222222',
    //     'emailAddress': 'tomhanks@gmail.com',
    //     'profileImageUrl': 'https://randomuser.me/api/portraits/lego/7.jpg',
    //     'csat': 4.5
    //   },
    //   {
    //     'empId': 'DFG3764',
    //     'designation': 'Software Developer',
    //     'firstName': 'Joe',
    //     'lastName': 'Martin',
    //     'fullName': 'Joe Martin',
    //     'location': 'CA',
    //     'phoneNumber': '408-2222222',
    //     'emailAddress': 'jmartin@gmail.com',
    //     'profileImageUrl': 'https://randomuser.me/api/portraits/lego/3.jpg',
    //     'csat': 3
    //   },
    //   {
    //     'empId': 'DFG3114',
    //     'designation': 'Program Directory',
    //     'firstName': 'Tom',
    //     'lastName': 'Hanks',
    //     'fullName': 'Tom Hanks',
    //     'location': 'CA',
    //     'phoneNumber': '408-2222222',
    //     'emailAddress': 'tomhanks@gmail.com',
    //     'profileImageUrl': 'https://randomuser.me/api/portraits/lego/6.jpg',
    //     'csat': 4
    //   },
    //   {
    //     'empId': 'DFG3984',
    //     'designation': 'Tester',
    //     'firstName': 'Gino',
    //     'lastName': 'Trombetti',
    //     'fullName': 'Gino Trombetti',
    //     'location': 'CA',
    //     'phoneNumber': '408-2222222',
    //     'emailAddress': 'gtrombetti@gmail.com',
    //     'profileImageUrl': 'https://randomuser.me/api/portraits/lego/5.jpg',
    //     'csat': 4.5
    //   },
    //   {
    //     'empId': 'DFG3230',
    //     'designation': 'Software Architect',
    //     'firstName': 'Marc',
    //     'lastName': 'Heil',
    //     'fullName': 'Marc Heil',
    //     'location': 'CA',
    //     'phoneNumber': '408-2222222',
    //     'emailAddress': 'mheil@gmail.com',
    //     'profileImageUrl': 'https://randomuser.me/api/portraits/lego/4.jpg',
    //     'csat': 5
    //   }
    // ];
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
