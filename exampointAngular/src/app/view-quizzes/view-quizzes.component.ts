import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.css'
})
export class ViewQuizzesComponent {

  quizzes = [
    {
      qId:23,
      title: 'Basic Java Quiz',
      description :'Java is a platform-independent and robust programming language',
      maxMarks: '50',
      numberOfQuestion:'20',
      active : '',
      category:{
        title : 'programming',
      }
    }
  ]


  constructor(private _quiz : QuizService){}


  ngOnInit() :void{
    this._quiz.quizzes().subscribe((data : any) => {this.quizzes=data},
    (error)=>{swal('Error', 'Error', 'error');}
    );
  }



  deleteQuiz(qId: any){
    this._quiz.deleteQuiz(qId).subscribe(
      (date:any)=>{

       this.quizzes = this.quizzes.filter((quiz)=>quiz.qId!=qId)
        swal('success','Quiz Deleted', 'success');
      },
      (error)=>{
        swal('error','Something Went Wrong', 'error');
      }
    );
  }
  
  

}
