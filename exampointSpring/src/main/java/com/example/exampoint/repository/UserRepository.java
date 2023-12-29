package com.example.exampoint.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.exampoint.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	 Optional<User> findByUsernameAndPassword(String username, String password);
}
