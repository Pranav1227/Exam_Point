import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  isLoggedin = false;
  user = null;


  username!: string;
  password!: string;

  constructor(private router: Router, private authService : AuthService) {}


  ngOnInit(): void {}


  onClickSubmit(){
    const userCredentials = {username : this.username,  password: this.password};
    
    this.authService.loginUser(userCredentials).subscribe(
      (response) => {
        console.log(response);
            
        if (response === "Login successful. Redirect to user dashboard."){
          this.router.navigate(['/user-dashboard']);
        }else{
        

        }
      },
        (error) =>{
          console.error(error);
        }        
    );
  
  }
}