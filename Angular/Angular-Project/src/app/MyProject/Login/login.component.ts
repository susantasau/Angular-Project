import { Component, OnInit } from "@angular/core";
import { AllService } from "../MyService.service";
import { NgForm } from "@angular/forms";
import { SignUpData } from "../MyClass.model";
import { Router } from "@angular/router";

@Component({
    selector:"login-comp",
    templateUrl:"./login.component.html",
    styleUrls:["./login.component.css"],
    providers:[AllService]
})

export class LoginComponent implements OnInit
{
    user !:string;
    pass !: string;
    UserNameHome !: string;
    
    
    constructor(private MyService:AllService, private router:Router){}

    ngOnInit(): void {
        
        
    }

    UserId():void
    {
        this.MyService.GetSingleData(this.user).subscribe(data=> this.MyService.loginData = data);
    }

    LoginSubmit(MyForm : NgForm)
    {
        if(this.MyService.loginData.user_Name === this.user && this.MyService.loginData.password === this.pass)
        {
            let loginData = MyForm.value;
            localStorage.setItem('Users',JSON.stringify(loginData));
            this.UserNameHome = this.MyService.loginData.first_Name.toString() + " " + this.MyService.loginData.last_Name.toString();
            this.router.navigate(["/home"],{queryParams : {name : this.UserNameHome}});
            // this.ResetAll(MyForm);
            sessionStorage.setItem("isLoggedIn",'true');
        }
        else
        {
            alert("Invalid username or password");
            this.ResetAll(MyForm);
        }
    }

    ResetAll(myForm:NgForm)
    {
        myForm.form.reset();
        this.MyService.loginData = new SignUpData();
    }

    SignUpEvent()
    {
        this.router.navigate(['/signup']);
    }
}