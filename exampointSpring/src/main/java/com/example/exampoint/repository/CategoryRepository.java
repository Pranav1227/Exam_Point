package com.example.exampoint.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.exampoint.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
