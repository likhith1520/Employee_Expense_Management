import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  arr!:any;
  count:number=0;
  count2:number=0;
  constructor(private router:Router,private http:HttpClient) { }
  email!:String;
  password!:String;
  ngOnInit(): void {
  }
  login(){
    if(this.email=="admin" && this.password=="admin"){
      this.router.navigate(['adminHome']);
    }
    else if(this.email=="manager" && this.password=="manager"){
      this.router.navigate(['managerHome']);
    }
    else{
      this.http.post("http://localhost:8080/login",{email:this.email,password:this.password}
      ,{observe:'response'})
      .subscribe((res)=>{
         if(res.body==true){
          this.router.navigate(['user',{data:this.email}]);
         }
         else  
            alert("Invalid Credentials");
      });
    }
     
      // if(this.email=="admin@gmail.com" && this.password=="admin")
      //   this.count2=1;
      // if(this.count==1)
       
      // else if(this.count2==1)
      //   this.router.navigate(['adminHome']);
      // 
      
  }
  register(){
    this.router.navigate(['register']);
  }
}
