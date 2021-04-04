import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-home-page',
  templateUrl: './manager-home-page.component.html',
  template: '<input type="date" max="{{this.date}}">',
  styleUrls: ['./manager-home-page.component.css']
})
export class ManagerHomePageComponent implements OnInit {

  data:any= [];
  temp:any;
  claimedby!:string;
  billnumber!:number;
  billcost!:number;
  dateon!:string;
  date:any;
  status!:string;
  remark!:string;
  constructor(private http:HttpClient,private roter:Router) { }

  ngOnInit(): void {
    this.claimedby="";
    this.date = new Date().toISOString().slice(0, 10);
    this.http.get("http://localhost:8080/manager",{observe:'response'})
    .subscribe((res)=>{
        console.log(res.body);
        this.data = res.body;
    })
  }

  editdetails(bno:any){
    if(this.claimedby!="")
      alert("Cancel and try");
    else{
      for(var i=0;i<this.data.length;i++){
        if(this.data[i].billnumber==bno){
          this.temp = this.data[i];
          this.claimedby = this.data[i].claimedby;
          this.billnumber = this.data[i].billnumber;
          this.billcost = this.data[i].billcost;
          this.dateon = this.data[i].dateon;
          this.status = this.data[i].status;
          this.remark = this.data[i].remark;
          const filterArray = this.data.filter((item:any) => item.billnumber !== bno);
          this.data = filterArray;
        }
        
      }
    }
    
  }

  deletedetails(bno:number){
    this.http.delete("http://localhost:8080/manager/expense/"+bno)
    .subscribe((res)=>{
        alert("Deleted Successfully");
        window.location.reload();
    });
  }

  updatedetails(){
    if(this.billnumber<0 || this.billcost<0){
      alert("Enter valid Cost/Number");
    }
    else{
      this.http.put("http://localhost:8080/manager/expense/"+this.billnumber,
      {
       claimedby:this.claimedby,
       billnumber:this.billnumber,
       billcost:this.billcost,
       dateon:this.dateon,
       status:this.status,
       remark:this.remark},{observe:'response'})
       .subscribe((res)=>{
         alert("Updated Successfully");
         window.location.reload();
       })
    }
    
  }
  managerlogoutclick(){
    this.roter.navigate(['login']);
  }

  cancelclick(){
    if(this.claimedby==""){
      alert("Cannot Update");
    }
    else{
      this.claimedby = "";
      this.billcost =0;
      this.billnumber =0;
      this.dateon="";
      this.status = "";
      this.remark="";
      
     this.data.push(this.temp);  
    }
    
}

}
