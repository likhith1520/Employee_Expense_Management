import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email!:string;
  password!:string;
  mobilenumber!:string;
  username!:string;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  loginPage(){
    this.router.navigate(['login']);
  }
  Signup(){
    
    var obs = this.http.post("http://localhost:8080/signup",{email:this.email,username:this.username,mobilenumber:this.mobilenumber,password:this.password})
    obs.subscribe((res)=>{
        if(res){
          alert("Registered Successfully");
          this.router.navigate(['login']);
        }
        else{
          alert("Email Already Exists/Invalid Credentials");
        }
    });
  
  }
}
