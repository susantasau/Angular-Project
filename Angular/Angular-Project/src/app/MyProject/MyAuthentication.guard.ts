import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AllService } from "./MyService.service";

@Injectable({
    providedIn:"root"
})

export class MyAuthentication implements CanActivate
{
    constructor(private MyService:AllService,private router:Router){}
    canActivate(): boolean 
    {
        if(this.MyService.IsAuthenticated())
        {
            return true;
        }
        else
        {
            this.router.navigate(["/login"]);
            return false;
        }
    }
}