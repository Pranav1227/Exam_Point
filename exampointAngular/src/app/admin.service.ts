import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isLoggedIn: any;



  constructor(private http: HttpClient) {}

  getAdminData(adminId: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/admins/${adminId}`);
  }

  getAdmin(){
    let user = localStorage.getItem('user');
    if (user != null){
      return JSON.parse(user);
    }else{
    }
  }


  addAdmin(adminData: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/admins`, adminData);
  }

  updateAdmin(adminId: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`${baseUrl}/admins/${adminId}`, updatedData);
  }

  deleteAdmin(adminId: number): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/admins/${adminId}`);
  }
}































// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import baseUrl from './helper';

// @Injectable({
//   providedIn: 'root',
// })
// export class AdminService {

//   constructor(private http: HttpClient) { }

//   private isAdmin: boolean = false;

//   isAdminUser(): boolean {
//     return this.isAdmin;
//   }

//   storeAdminStatus(isAdmin: boolean): void {
//     this.isAdmin = isAdmin;
//   }

//   loginAdmin(admin: any): Observable<any> {
//     return this.http.get<any>(`${baseUrl}/api/admin/login`, admin);
//     // return this.http.delete<any>(`${baseUrl}/api/admin/login`, admin);


//   }




// }


// getAllUsersWithDetails(): User[] {
//   //return this.getAllUsers()((user) => ({ ...user, isAdmin: true }));
//   return this.http.get<any>(`${baseUrl}/api/users`);
// }


// deleteUserAndLog(userId: string) {
//   this.deleteUser(userId);
//   console.log(`User deleted user with ID ${userId}`);
// }







