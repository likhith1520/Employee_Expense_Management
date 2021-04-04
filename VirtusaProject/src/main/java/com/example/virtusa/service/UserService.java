package com.example.virtusa.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.virtusa.entity.ExpenseModel;
import com.example.virtusa.entity.UserModel;
import com.example.virtusa.repository.ExpenseRepository;
import com.example.virtusa.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private ExpenseRepository repository2;
	
	public boolean saveUser(UserModel user) {
		String c = user.getEmail();
		if(!c.endsWith("@gmail.com") || !(c.length()>10)) {
			return false;
		}
		UserModel check = repository.findByEmail(user.getEmail());
		System.out.println(check);
		if(check!=null)
			return false;
		else {
			repository.save(user);
			return true;
		}
			
//		try {
//			// checking if user is already present or not if yes it returns false
//			// else it will give come exception that means user is not present so it returns true
//			
//			return false;
//		}
//		catch(Exception ep) {
//			repository.save(user);
//			return true;
//		}
	}
	
	// fetching all details
	public List<UserModel> getUsers(){
		return repository.findAll();
	}
	
	// fetching user by email id
	public UserModel getByEmail(String emailid) {
		return repository.findByEmail(emailid);
	}
	
	public UserModel updateEmployee(UserModel user) {
		UserModel existing  = repository.findByEmail(user.getEmail());
		existing.setEmail(user.getEmail());
		existing.setMobilenumber(user.getMobilenumber());
		existing.setPassword(user.getPassword());
		existing.setRole(user.getRole());
		existing.setUsername(user.getUsername());
		return repository.save(existing);
	}
	
	@SuppressWarnings("unchecked")
	public String deleteEmployee(String email) {
		UserModel found = repository.findByEmail(email);
		List<ExpenseModel> found1 = repository2.findAllByEmail(email);
		
		for(ExpenseModel e:found1)
		{
			repository2.delete(e);
					
		}
		repository.delete(found);
		return "Deleted";
	}

	public UserModel findEmployeeByEmail(String email) {
		return repository.findByEmail(email);
	}
	
	
}
