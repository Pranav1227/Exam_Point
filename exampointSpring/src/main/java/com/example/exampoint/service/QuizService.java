package com.example.exampoint.service;

import java.util.Set;

import com.example.exampoint.entity.Quiz;

public interface QuizService {
	
	public Quiz addQuiz (Quiz quiz);
	
	public Quiz updateQuiz (Quiz quiz);
	
	public Set<Quiz> getQuizzes();
	
	public Quiz getQuiz(Long quizId);	

	public void deleteQuiz(Long quizId);

}
