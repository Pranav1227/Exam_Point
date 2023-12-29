package com.example.exampoint.controller;


import com.example.exampoint.credentials.AdminCredentials;
import com.example.exampoint.credentials.UserCredentials;
import com.example.exampoint.entity.User;
import com.example.exampoint.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/user")
public class UserLoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserCredentials credentials) {
        String username = credentials.getUsername();
        String password = credentials.getPassword();

        Optional<User> userOptional = userService.authenticate(username, password);
        
        
        if (userOptional.isPresent()) {
            return ResponseEntity.ok("Login successful. Redirect to user dashboard.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}



	

