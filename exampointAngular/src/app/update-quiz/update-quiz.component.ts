import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { CategoryService } from '../category.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent implements OnInit{

  constructor(private route : ActivatedRoute, private _quiz : QuizService, private cat  : CategoryService){}

  qId =0;
  quiz: any ;
  categories : any;




  ngOnInit(): void {
      this.qId = this.route.snapshot.params['qid'];
     // alert(this.qId);
     this._quiz.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz = data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
      }
     );
     this.cat.categories().subscribe(
      (data :any)=>{
        this.categories = data;
      },
      (error) =>{
        alert("errorin loading");
      }
     );
  }



  public updatedata(){
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data : any)=>{
        swal('success', 'Quiz Updated', 'success');
      },
      (error)=>{
        swal('error','error','error');
      }
    );
  }




}
