import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import swal from 'sweetalert';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css'
})
export class AddQuizComponent implements OnInit {
  categories = [{
    cid: 23,
    title: 'programming'
  }]



  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: null,
  };





  constructor(private _cat: CategoryService, private snack: MatSnackBar, private _quiz: QuizService) { }


  ngOnInit(): void {
    this._cat.categories().subscribe(

      (data: any) => {
        this.categories = data;
      },
      (error) => {
        swal('error', 'error', 'error');
      }
    );
  }



  addQuiz() {
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this.snack.open('Title required', '', {
        duration: 3000,
      });
      return;
    }
  
    this._quiz.addQuiz(this.quizData).subscribe(
      () => {
        swal('success', 'success', 'success');
  
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          category: null,
        };
      },
      (error) => {
        swal('error', 'error', 'error');
      }
    );
  }
  




}
