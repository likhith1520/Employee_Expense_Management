package com.example.virtusa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.virtusa.entity.LoginModel;
import com.example.virtusa.entity.UserModel;
import com.example.virtusa.repository.LoginRepository;

@RestController
public class LoginController {
	
	@Autowired
	LoginRepository repo;
	
	@PostMapping("/login")
	public boolean checkUser(@RequestBody LoginModel user) {
		UserModel a = repo.findByEmail(user.getEmail());
		if(!(a==null)) {
			if(user.getPassword().equals(a.getPassword())) {
				return true;
			}
			return false;
				
		}
		else {
			return false;
		}
	}
} 
