package com.example.exampoint.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.JsonPath;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exampoint.entity.Question;
import com.example.exampoint.entity.Quiz;
import com.example.exampoint.service.QuestionService;
import com.example.exampoint.service.QuizService;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {
	
	@Autowired
	private QuestionService questionService ; 
	
	@Autowired
	private QuizService quizService;
	
	
	
	
	@PostMapping("/")
	public ResponseEntity<Question> add(@RequestBody Question question){
		return ResponseEntity.ok(this.questionService.addQuestion(question));
	}
	
	
	@PutMapping("/")
	public ResponseEntity<Question> update(@RequestBody Question question){
		return ResponseEntity.ok(this.questionService.updateQuestion(question));
	}
	
	
	@GetMapping("/quiz/{qid}")
	public ResponseEntity<?> getQuestionOfQuiz(@PathVariable("qid") Long qid){
		

		
		Quiz quiz =  this.quizService.getQuiz(qid);
		 Set<Question>questions =   quiz.getQuestions();
		 List list = new ArrayList(questions);
		 if(list.size() > Integer.parseInt(quiz.getNumberOfQuestions())) {
			 list = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestions()+1));
		 }
		 
		 Collections.shuffle(list);
		 return ResponseEntity.ok(list);
	}

	
	
	@GetMapping("/{quesId}")
	public Question get(@PathVariable ("quesId") Long quesId) {
		return this.questionService.getQuestion(quesId);
	}
	
	@DeleteMapping("/{quesId}")
	public void delete(@PathVariable ("quesId")Long quesId) {
		this.questionService.deleteQuestion(quesId);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
