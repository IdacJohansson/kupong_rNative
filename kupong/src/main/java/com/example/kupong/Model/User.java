package com.example.kupong.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id; 

    private String username; 
    private String password; 

    public User(String username, String password){
        this.username = username; 
        this.password = password; 
    }

    public Long getId() {
        return id;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String userName) {
        this.username = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
