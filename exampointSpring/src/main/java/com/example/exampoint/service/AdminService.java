package com.example.exampoint.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exampoint.entity.Admin;
import com.example.exampoint.repository.AdminRepository;

@Service
public class AdminService {

 @Autowired
 private AdminRepository adminRepository;

 public Optional<Admin> authenticate(String username, String password) {
     return adminRepository.findByUsernameAndPassword(username, password);
 }
}
