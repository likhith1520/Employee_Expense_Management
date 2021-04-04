package com.example.virtusa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.virtusa.entity.ExpenseModel;
import com.example.virtusa.repository.ExpenseRepository;

@Service
public class ExpenseService {
		
		@Autowired
		private ExpenseRepository repository;
		
		
		public ExpenseModel saveuser(ExpenseModel expense) {
			return repository.save(expense);
		}

		public List<ExpenseModel> findAll(String email) {
			return repository.findAllByEmail(email);
		}

		public ExpenseModel updateByBillNumber(ExpenseModel data) {
				ExpenseModel existing  = repository.findByBillNumber(data.getBillnumber());
				existing.setBillcost(data.getBillcost());
				existing.setBillnumber(data.getBillnumber());
				existing.setClaimedby(data.getClaimedby());
				existing.setDateon(data.getDateon());
				existing.setImage(data.getImage());
				existing.setRemark(data.getRemark());
				existing.setStatus(data.getStatus());
				return repository.save(existing);
		}

		public ExpenseModel deleteByBillNumber(int bno) {
				ExpenseModel existing = repository.findByBillNumber(bno);
				repository.delete(existing);
				return existing;
		}

		public List<ExpenseModel> allModels() {
			return repository.findAll();
		}
		
}
