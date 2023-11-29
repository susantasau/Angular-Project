import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"Navbar-Comp",
    templateUrl:"./navbar.component.html",
    styleUrls:["./navbar.component.css"]
})

export class NavbarComponent
{
    session!:any;

    constructor(private router:Router){}
    LoggedIn()
    {
        // let data:any = localStorage.getItem("Users");
        let data:any = sessionStorage.getItem("isLoggedIn");
        this.session = JSON.parse(data);
        if(data)
        {
            return this.session;
        }
        else
        {
            return this.session;
        }
    }

    LoggedOut()
    {
        //localStorage.removeItem("Users");
        this.router.navigate(["/"]);
        sessionStorage.removeItem('isLoggedIn');
    }
}