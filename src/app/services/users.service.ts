import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of, take, tap, map } from 'rxjs';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = "http://localhost:4566";

  berechtigungAdmin: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private _router: Router) { }

  loginUser(user: User){
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getUserBerechtigung(): Observable<any> {
    const url = `${this.baseUrl}/userAdminBerechtigung`;
    return this.http.get(url);
  }

  loggedInAsAdmin(): boolean {
    if(localStorage.getItem('admin') == 'true' && this.loggedIn()){
      return true;
    } else {
      return false;
    }
  }

  loggedInAsUser(): boolean {
    if(localStorage.getItem('admin') == 'false' && this.loggedIn()){
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this._router.navigate(['/login']);
  }
}
