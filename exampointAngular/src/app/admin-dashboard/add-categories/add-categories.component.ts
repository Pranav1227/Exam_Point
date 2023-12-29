import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrl: './add-categories.component.css'
})
export class AddCategoriesComponent   {
  category ={

    title:'',
    description: '',
  };

  constructor(private _category : CategoryService, private _snack : MatSnackBar){}

  ngOnInit(): void{}


  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
      this._snack.open("Title Required", '', {
        duration : 3000,
      });
      return;
    }


    this._category.addCategory(this.category).subscribe(


      (date:any)=>{
        swal('Success', 'Categories Added', 'success');
      },
      (error)=>{
        swal('Error', 'CategoriesNot Added', 'error');
      }


    )
  }
}
