package com.example.exampoint.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exampoint.entity.User;
import com.example.exampoint.repository.UserRepository;



@Service
public class UserService {

 @Autowired
 private UserRepository userRepository;

 public Optional<User> authenticate(String username, String password) {
     return userRepository.findByUsernameAndPassword(username, password);
 }
}

