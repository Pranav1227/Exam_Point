import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'] 
})
export class UserRegistrationComponent implements OnInit {
  
  constructor(private authService: AuthService, private snack: MatSnackBar) {}

  public user = {
    name: '',
    username: '',
    password: '',
    email: '',
    contact: '',
  };

  ngOnInit(): void {
      
  }

  formSubmit() {
    console.log(this.user);

    if (!this.user.name || !this.user.username || !this.user.password || !this.user.email || !this.user.contact) {
      this.snack.open('All fields are required', ' ', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    this.authService.registerUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        // alert('Form is submitted');
        Swal('Success done', 'Your User id is' + ' ' + data.id, 'success' );
      },
      (error: any) => {
        console.log(error);
        alert('Something went wrong');
      }
    );
  }
}





