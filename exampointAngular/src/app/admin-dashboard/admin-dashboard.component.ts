import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    
  }

  navigateToUserList(): void {
    this.router.navigate(['/user-list']);
  }



  addAdmin(): void {
  }

  updateAdmin(adminId: number): void {
  }

  deleteAdmin(adminId: number): void {
  }

  getAdminDetails(adminId: number): void {
  }


}


































// // admin-dashboard.component.ts
// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-admin-dashboard',
//   templateUrl: './admin-dashboard.component.html',
//   styleUrls: ['./admin-dashboard.component.css'],
// })
// export class AdminDashboardComponent implements OnInit {
//   User!: any[]; // Assuming you have a user model
  
//  // users = new User('','','','','');

//   constructor(private userService: UserService) {}

//   ngOnInit() {
//     // Fetch user data from a service or API
//      this.userService.getAllUsers().subscribe( data=> { this.User = data;});
//   }

//   deleteUser(userId: string) {
//     // Call a service method to delete the user
//     this.userService.deleteUser(userId);
//     // Update the local users array or re-fetch from the service
//      this.userService.getAllUsers();
//   }
// }
