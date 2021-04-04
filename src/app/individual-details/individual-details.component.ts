import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.css']
})
export class IndividualDetailsComponent implements OnInit {
  required:any;
  data:any;

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => { 
      this.required = params.get('token'); 
      console.log(this.required);
    });
    this.http.get("http://localhost:8080/admin/"+this.required,{observe:'response'})
    .subscribe((res)=>{
      this.data = res.body;
    })
  }

  individualhomeclick(){
    this.route.navigate(['adminHome']);
}
individuallogoutclick(){
  this.route.navigate(['login']);
} 
backclicked(){
  this.route.navigate(['adminHome']);
}
}
