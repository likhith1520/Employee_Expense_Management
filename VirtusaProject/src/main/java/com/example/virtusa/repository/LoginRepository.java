package com.example.virtusa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.virtusa.entity.UserModel;

public interface LoginRepository extends JpaRepository<UserModel, String>{

	@Query(value="select * from user_table where email = ?1",nativeQuery=true)
	UserModel findByEmail(String email);

}