package com.example.kupong.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.kupong.Model.User;

public interface UserRepo extends JpaRepository<User, Long> {

    User findByUserId(Long id);
    User findByUsername (String userName); 

}
