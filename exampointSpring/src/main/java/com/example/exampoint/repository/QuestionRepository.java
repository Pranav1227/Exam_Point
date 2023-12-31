package com.example.exampoint.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.exampoint.entity.Question;
import com.example.exampoint.entity.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Long> {

	Set<Question> findByQuiz(Quiz quiz);

}
