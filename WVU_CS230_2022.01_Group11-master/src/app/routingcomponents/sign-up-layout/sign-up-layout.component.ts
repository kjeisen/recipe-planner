import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenicationSerivce } from 'src/app/auth/authentication/authentication.service';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

@Component({
  selector: 'n-sign-up-layout',
  templateUrl: './sign-up-layout.component.html',
  styleUrls: ['./sign-up-layout.component.css']
})
export class SignUpLayoutComponent implements OnInit {
  email:string ="";
  password ="";

  constructor(private us:AuthenicationSerivce, private router:Router, private navbar :TopNavBarComponent){}
  ngOnInit(): void {
  }

  signUp(form:NgForm){
    try{
    this.us.signUpWithEmail(form.value.email,form.value.password,form.value.displayName)
    } catch (error){
      console.log(error + "this print");
    }

   
    
  }
  
  redirectToSignIn(){
    this.router.navigateByUrl("sign-in")
  }
  
 
 
}

 
