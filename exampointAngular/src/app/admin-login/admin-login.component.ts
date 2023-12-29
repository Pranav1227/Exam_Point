import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'] 
})
export class AdminLoginComponent implements OnInit {

  isLoggedin = false;
  user = null;

  username!: string;
  password!: string;

  constructor(private router: Router, private authService : AuthService) {}

   ngOnInit(): void {}
  




onClickSubmit() {
  const adminCredentials = { username: this.username, password: this.password };

  this.authService.loginAdmin(adminCredentials).subscribe(
    (response) => {
      console.log(response);

      if (response === 'Login successful. Redirect to admin dashboard.') {
            this.router.navigate(['/admin-dashboard']);
      } else {
        alert("Login fail");
      }
    },
    (error) => {
      console.error(error);
  
    }
  );
  }
}
