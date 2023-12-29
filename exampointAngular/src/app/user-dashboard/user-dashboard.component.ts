import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: 'user-dashboard.component.html', // Check this path
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  ngOnInit(): void {
  }

  // users: any[] = [];

  // constructor(private userService: UserService) { }

  // ngOnInit(): void {
  //   // Fetch additional data or perform initialization here
  //   this.fetchUsers();
  // }

  // fetchUsers(): void {
  //   // Example: Fetch the list of users from the backend
  //   this.userService.getUsers().subscribe(
  //     (data: any[]) => {
  //       this.users = data;
  //       console.log('Users data:', data);
  //     },
  //     (error: any) => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }

  // // ... (other methods)

}

// // user-dashboard.component.ts

// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
// import { User } from '../user.interface';

// @Component({
//   selector: 'app-user-dashboard',
//   templateUrl: './user-dashboard.component.html',
//   styleUrls: ['./user-dashboard.component.css'],
// })
// export class UserDashboardComponent implements OnInit {
//   user!: User;

//   constructor(private userService: UserService) {}

//   ngOnInit() {
//     // this.user = this.userService.getAllUsers();
//   }

//   updateUserDetails(updatedUser: User) {

//     this.userService.updateUser(updatedUser);
    
//     this.user = { ...this.user, ...updatedUser };
//   }
// }
