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

import com.example.virtusa.entity.ExpenseModel;
import com.example.virtusa.service.ExpenseService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ExpenseController {

	@Autowired
	public ExpenseService service;
	
	@PostMapping("/expense")
	public ExpenseModel addUser(@RequestBody ExpenseModel expense) {
		return service.saveuser(expense);
	}
	
	@GetMapping("/expense/{email}")
	public List<ExpenseModel> getAll(@PathVariable String email){
		return service.findAll(email);
	}
	
	@PutMapping("/expense/{id}")
	public ExpenseModel updateExpense(@RequestBody ExpenseModel expense) {
		return service.updateByBillNumber(expense);
	}
	
	@DeleteMapping("/expense/{bno}")
	public ExpenseModel deleteExpense(@PathVariable int bno) {
		return service.deleteByBillNumber(bno);
	}
	
	@GetMapping("/manager")
	public List<ExpenseModel> managerAll(){
		return service.allModels();
	}
	
	@PutMapping("/manager/expense/{billno}")
	public ExpenseModel updateExpenseManager(@RequestBody ExpenseModel expense) {
		return service.updateByBillNumber(expense);
	}
	
	@DeleteMapping("/manager/expense/{billno}")
	public ExpenseModel deleteExpenseManager(@PathVariable int billno) {
		return service.deleteByBillNumber(billno);
	}
}
