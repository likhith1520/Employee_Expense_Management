package com.example.virtusa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.virtusa.entity.UserModel;
import com.example.virtusa.service.UserService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AdminController {

	@Autowired
	private UserService service;
	
	@GetMapping("/admin")
	public List<UserModel> findAllEmployees(){
		return service.getUsers();
	}
	@GetMapping("/admin/{email}")
	public UserModel findEmployee(@PathVariable String email) {
		return service.findEmployeeByEmail(email);
	}
  /*
   
	}
   */
	@PutMapping("/admin/user/{email}")
	public UserModel updateEmployee(@RequestBody UserModel employee) {
		return service.updateEmployee(employee);
	}
	
	@DeleteMapping("/admin/delete/{email}")
	public Boolean deleteEmployee(@PathVariable String email)
	{
		String ans = service.deleteEmployee(email);
		//System.out.println(ans);
		if(ans=="Deleted")
			return true;
		else 
			return false;
	}
}
