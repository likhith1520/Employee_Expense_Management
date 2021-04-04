import { HttpClient, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  total:number = 50000;
  pending:number = 0;
  approved:number = 0;
  accountholder!:any;
  people:any = []
  constructor(private route: ActivatedRoute,private router:Router,private http:HttpClient) { 
    
  }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => { 
      this.accountholder = params.get('data'); 
      console.log(this.accountholder);
  });
    this.http.get("http://localhost:8080/expense/"+this.accountholder,{observe:'response'})
      .subscribe((res)=>{
          console.log(res.body);
          this.people = res.body;
          for(var i=0;i<this.people.length;i++){
            this.approved = this.approved + Number(this.people[i].billcost);
          }
          this.pending = this.total - this.approved;
    })
   
  }
  homeclick(){
    this.router.navigate(['user/home',{data:this.accountholder}]);
  }
  expensesclick(){
    this.router.navigate(['user/expenses',{data:this.accountholder}]);   
  }
  logoutclick(){
    this.router.navigate(['user/logout']);   
  }

}
