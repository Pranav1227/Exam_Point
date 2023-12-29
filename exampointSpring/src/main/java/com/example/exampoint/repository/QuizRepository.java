package com.example.exampoint.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.exampoint.entity.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long>{

}
