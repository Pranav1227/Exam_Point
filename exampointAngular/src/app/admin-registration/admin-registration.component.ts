import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  constructor(private authService: AuthService, private snack: MatSnackBar) {}

  public admin = {
    name: '',
    username: '',
    password: '',
    email: '',
    contact: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.admin);

    if (!this.admin.name || !this.admin.username || !this.admin.password || !this.admin.email || !this.admin.contact) {
      this.snack.open('All fields are required', ' ', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    this.authService.registerAdmin(this.admin).subscribe(
      (data: any) => {
        console.log(data);
        // alert('Form is submitted');
        Swal('Successfully done', 'Your Admin Id is' + ' ' + data.id, 'success');
      },
      (error: any) => {
        console.log(error);
        alert('Something went wrong');
      }
    );
  }
}
