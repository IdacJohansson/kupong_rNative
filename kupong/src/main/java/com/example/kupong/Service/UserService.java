package com.example.kupong.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.kupong.Model.User;
import com.example.kupong.Repository.UserRepo;

@Service
public class UserService {

    private final UserRepo userRepo; 

public UserService (UserRepo userRepo) {
    this.userRepo = userRepo;
}

public List <User> getAllUsers() {
    return userRepo.findAll();
}
    
}
