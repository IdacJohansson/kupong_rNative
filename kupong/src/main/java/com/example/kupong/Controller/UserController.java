package com.example.kupong.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.kupong.Model.User;
import com.example.kupong.Service.UserService;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/users")
public class UserController {

   private final UserService userService;

   @Autowired
    public UserController(UserService userService) {
        this.userService = userService; 
    }


    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    /*@PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        Optional<User> user = userRepo.findByUsername(request.username);

        if (user.isPresent() && user.get().getPassword().equals(request.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }

    record LoginRequest(String username, String password) {
    } */

}
