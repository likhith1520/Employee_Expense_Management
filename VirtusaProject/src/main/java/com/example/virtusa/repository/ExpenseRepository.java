package com.example.virtusa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.virtusa.entity.ExpenseModel;
import com.example.virtusa.entity.UserModel;

public interface ExpenseRepository extends JpaRepository<ExpenseModel,String>{
	
	@Query(value="select * from user_table where email = ?1 ",nativeQuery=true)
	UserModel findByEmail(String claimedby);

	@Query(value="select * from expense_table where claimedby=?1",nativeQuery=true)
	List<ExpenseModel> findAllByEmail(String email);

	// here the bill number 1 means the parameter position in the function call
	@Query(value="select * from expense_table where billnumber=?1",nativeQuery=true)
	ExpenseModel findByBillNumber(int billnumber);

}
