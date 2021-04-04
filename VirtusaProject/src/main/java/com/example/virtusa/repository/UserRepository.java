package com.example.virtusa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.virtusa.entity.UserModel;

public interface UserRepository extends JpaRepository<UserModel,String>{

	// ?1 means 1st paramter in table
	// return value is UserModel as it is *
	@Query(value="select * from user_table where email = ?1 ",nativeQuery=true)
	UserModel findByEmail(String email);
	
	// the primary key is String so use String

}
