// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAdmin: boolean = false;

  constructor(private http: HttpClient) {}

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  storeAdminStatus(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/api/user/register`, user);
  }

  registerAdmin(admin: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/api/admin/register`, admin);
  }

  loginAdmin(admin: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/api/admin/login`, admin, { responseType: 'text' as 'json' });
  }


  loginUser(user: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/api/user/login`, user, { responseType: 'text' as 'json' });
  }

}
