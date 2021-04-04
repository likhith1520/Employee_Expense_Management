package com.example.virtusa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="expense_table")
public class ExpenseModel {

	@Id
	@GeneratedValue
	private int id;
	@Column(name="claimedby")
	//below id is assumed as primary if we keep claimed by as id then we can add latest one only. 
	private String claimedby;
	@Column(name="billnumber")
	private int billnumber;
	@Column(name="billcost")
	private int billcost;
	@Column(name="dateon")
	private String dateon;
	@Column(name="status")
	private String status;
	@Column(name="remark")
	private String remark;
	@Column(name="image")
	private String image;
	
	
	public ExpenseModel() {
		
	}
	public ExpenseModel(int billnumber, int billcost, String dateon, String status, String remark, String image,
			String claimedby) {
		super();
		this.billnumber = billnumber;
		this.billcost = billcost;
		this.dateon = dateon;
		this.status = status;
		this.remark = remark;
		this.image = image;
		this.claimedby = claimedby;
	}
	public String getClaimedby() {
		return claimedby;
	}
	public void setClaimedby(String claimedby) {
		this.claimedby = claimedby;
	}
	public int getBillnumber() {
		return billnumber;
	}
	public void setBillnumber(int billnumber) {
		this.billnumber = billnumber;
	}
	public int getBillcost() {
		return billcost;
	}
	public void setBillcost(int billcost) {
		this.billcost = billcost;
	}
	public String getDateon() {
		return dateon;
	}
	public void setDateon(String dateon) {
		this.dateon = dateon;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	
}
