import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import Swal from 'sweetalert';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent {

  categories = [
    {
      cid: 23,
      title: 'programming',
      description: 'this is testing categories',
    },
   
  ];


  constructor(private category: CategoryService) { }

  ngOnInit() {
    this.category.categories().subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);
    },
      (error) => {
        Swal('error', 'Error in loading Data', 'error');
      }
    );
  }
}
