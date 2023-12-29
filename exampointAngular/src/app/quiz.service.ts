import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }


  public quizzes(){
    return this.http.get(`${baseUrl}/quiz/`);
  }


  // public addQuiz(quiz){
  //   this.http.post(`${baseUrl}/quiz/`, quiz)
  // }

  addQuiz(quiz: any): Observable<any> {
    return this.http.post(`${baseUrl}/quiz/`, quiz);
  }



   deleteQuiz(qId: any){
    return this.http.delete(`${baseUrl}/quiz/${qId}`);
  }


  public getQuiz(qId: any){
    return this.http.get(`${baseUrl}/quiz/${qId}`);
  }


  public updateQuiz(quiz: any){
    return this.http.put(`${baseUrl}/quiz/`, quiz)
  }
}
