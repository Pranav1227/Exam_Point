// user-update.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  userId!: number;
user: any;

  

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap?.get('id')!;
    
    
    this.userService.getUser(this.userId).subscribe((user: any) => {
     
    });
  }

  updateUser() {
  }
}
