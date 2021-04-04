import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {
  data:any=[];
  username!:string; 
  email!:string;
  password!:string;
  mobilenumber!:string;
  role!:string;
  searchuser!:string;
  temp:any;
  found:boolean = false;
  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.email="";
    this.http.get("http://localhost:8080/admin",{observe:'response'})
    .subscribe((res)=>{
       this.data = res.body;
    });
  }
  adminhomeclick(){
      this.route.navigate(['adminHome']);
  }
  adminlogoutclick(){
    this.route.navigate(['login']);
  }
  updateclick(){
    console.log(this.email);
      this.http.put("http://localhost:8080/admin/user/"+this.email,
      {email:this.email,username:this.username,mobilenumber:this.mobilenumber,password:this.password,role:this.role},{observe:'response'})
      .subscribe((res)=>{
        alert("Update Details"+res.body);
      });
      this.email="";
      this.username="";
      this.mobilenumber="";
      this.password="";
      this.role="";
      window.location.reload();
      
  }
  deleteButton(roleName:string){
    this.http.delete("http://localhost:8080/admin/delete/"+roleName)
    .subscribe((res)=>{
        alert("Deleted Successfully");
        window.location.reload();
    });
  }
  editButton(emailId:string){
    let en,ep,em,er,eno;
    if(this.email!="")
      alert("Cancel and try");
    else{
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].email==emailId){
            this.temp = this.data[i];
            em = this.data[i].email;
            ep = this.data[i].password;
            en = this.data[i].username;
            er = this.data[i].role;
            eno = this.data[i].mobilenumber;
            this.username = en;
            this.mobilenumber = eno;
            this.password = ep;
            this.role=er;
            this.email = em;
            const filterArray = this.data.filter((item:any) => item.email !== emailId);
            this.data = filterArray;
        }
      }
    }
  
  }

  searchclick(){
    if(!this.searchuser.endsWith("@gmail.com") || this.searchuser==""){
        alert("Please enter a valid user details");
    }
    else{
        this.found = false;
        for(var i=0;i<this.data.length;i++){
          if(this.data[i].email==this.searchuser){
              this.found = true;
          }
        }
        if(this.found){
            this.route.navigate(['userdetails',{token:this.searchuser}]);
        }
        else{
          alert("User Not found");
        }
    }
    
  }

  cancelclick(){
          if(this.email==""){
            alert("Cannot Update");
          }
          else{
            this.username = "";
            this.mobilenumber = "";
            this.password = "";
            this.role="";
            this.email = "";
            
           this.data.push(this.temp);  
          }
          
  }
}
