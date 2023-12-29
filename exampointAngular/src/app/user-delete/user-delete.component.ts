// user-delete.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css'],
})
export class UserDeleteComponent implements OnInit {
  userId!: number;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap?.get('id')!;
  }

  deleteUser() {
    this.userService.deleteUser(this.userId).subscribe((data: any) => {
      console.log('User deleted successfully:', data);
    });
  }
}
