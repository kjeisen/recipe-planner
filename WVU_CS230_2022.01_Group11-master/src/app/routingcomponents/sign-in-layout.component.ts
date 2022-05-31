import { Component, Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenicationSerivce } from "../auth/authentication/authentication.service";
import { UserModel } from "../backend/user-model";
import { UserService } from "../backend/user.service";
import { TopNavBarComponent } from "../navigation/topnavbar.component";


@Component({
    selector: 'sign-in-layout',
    templateUrl: 'sign-in-layout.component.html',
    styleUrls:['sign-in-layout.component.css']
})
export class SignInLayoutComponent{
    constructor(private us:AuthenicationSerivce, private router:Router, private navbar:TopNavBarComponent){}
     async signIn(form:NgForm){
       await this.us.loginWithEmail(form.value.email, form.value.password).then(value => {
           if(value == true){
            this.router.navigateByUrl('profile')
           } 
       });
       

    }

    redirectToSignUp(){
        this.router.navigateByUrl('sign-up')
    }
    
   
}