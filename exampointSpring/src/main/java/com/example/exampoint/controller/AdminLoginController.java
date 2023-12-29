package com.example.exampoint.controller;


import com.example.exampoint.credentials.AdminCredentials;
import com.example.exampoint.entity.Admin;
import com.example.exampoint.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/admin")
public class AdminLoginController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AdminCredentials credentials) {
        String username = credentials.getUsername();
        String password = credentials.getPassword();

        Optional<Admin> adminOptional = adminService.authenticate(username, password);

        if (adminOptional.isPresent()) {
            return ResponseEntity.ok("Login successful. Redirect to admin dashboard.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}



	

