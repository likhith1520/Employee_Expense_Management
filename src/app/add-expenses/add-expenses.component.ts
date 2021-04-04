import { HttpClient } from '@angular/common/http';
import { devOnlyGuardedExpression, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  template: '<input type="date" max="{{this.date}}">',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {
  people:any = [];
  count:any = 0;
  bn:number = 0;
  claimedby!:string;
  billnumber!:number;
  billcost!:number;
  dateon!:string;
  status!:string;
  remark!:string;
  date:any;
  accountholder!:any;
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) {
    
   }

  ngOnInit(): void {
    this.date = new Date().toISOString().slice(0, 10);
    this.route.paramMap.subscribe(params => { 
      this.accountholder = params.get('data'); 
      this.claimedby = this.accountholder;
      console.log(this.accountholder);
    });
    this.http.get("http://localhost:8080/expense/"+this.accountholder,{observe:'response'})
    .subscribe((res)=>{
      console.log(res);
      this.people = res.body;
    })
  }
  homeclick(){
    this.router.navigate(['user',{data:this.accountholder}]);
  }
  expensesclick(){
    this.router.navigate(['user/expenses']);   
  }
  logoutclick(){
    this.router.navigate(['user/logout']);   
  }
  addexpense(){

    if(this.billcost<0 || this.billnumber<0){
      alert("Enter Valid Bill Cost")
    }
    else{
      this.http.post("http://localhost:8080/expense",
      {
        claimedby:this.claimedby,
        billnumber:this.billnumber,
        billcost:this.billcost,
        dateon:this.dateon,
        status:this.status,
        remark:this.remark})
          .subscribe((res)=>{
            alert("Expnese Added Successfully");
        });

      this.claimedby=this.accountholder;
      this.dateon="";
      this.billcost=0;
      this.billnumber=0;
      this.status="";
      this.remark="";
      window.location.reload();
    }

      

  }
  editDetails(billno:number){
    let cb,bc,don,st,re;
      for(var i=0;i<this.people.length;i++){
          if(this.people[i].billnumber == billno){
              cb = this.people[i].claimedby;
              this.bn = this.people[i].billnumber;
              bc = this.people[i].billcost;
              don = this.people[i].dateon;
              st = this.people[i].status;
              re = this.people[i].remark;
              this.claimedby = cb;
              this.dateon = don;
              this.billcost = bc;
              this.billnumber = this.bn;
              this.status = st;
              this.remark = re;
              const filterArray = this.people.filter((item:any) => item.billnumber !== billno);
              this.people = filterArray;
              // Here we just delete the clicked one and after adding we replace with new one
              this.http.delete("http://localhost:8080/expense/"+billno)
              .subscribe((res)=>{
                  
              });
             
            }
        }
      
   }
}

