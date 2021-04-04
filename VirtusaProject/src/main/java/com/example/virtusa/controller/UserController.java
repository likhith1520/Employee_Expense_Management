package com.example.virtusa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.virtusa.entity.UserModel;
import com.example.virtusa.service.UserService;

@RestController
public class UserController {
		
	
	@Autowired
	private UserService service;
	
	// this controllers are just for mapping
	// evrything is done by the service method
	@PostMapping("/signup")
	public boolean addUser(@RequestBody UserModel user) {
		return service.saveUser(user);
	}
	
}
