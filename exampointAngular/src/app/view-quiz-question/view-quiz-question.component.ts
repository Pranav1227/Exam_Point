import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrl: './view-quiz-question.component.css'
})
export class ViewQuizQuestionComponent implements OnInit {

  qId : any;
  qTitle : any;
  question : any;

  constructor(private route :ActivatedRoute, private _question : QuestionService){}




  ngOnInit(): void {
   this.qId=this.route.snapshot.params['qid'];
   this.qTitle = this.route.snapshot.params['title'];
   this._question.getQuestionsOfQuiz(this.qId).subscribe(
    (data)=>{
      console.log(data)
      this.question = data;
    },
    (error)=>{
      console.log(error);
    }

   );
   
  }

  

}
