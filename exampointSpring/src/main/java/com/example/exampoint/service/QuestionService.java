package com.example.exampoint.service;

import java.util.Set;

import com.example.exampoint.entity.Question;
import com.example.exampoint.entity.Quiz;

public interface QuestionService {
	
	
	public Question addQuestion(Question question);
	public Question updateQuestion(Question question);
	public Set<Question> getQuestions();
	public Question getQuestion(Long questionId);
	public Set<Question> getQuestionOfQuiz(Quiz quiz);
	public void deleteQuestion(Long quesId);

}
