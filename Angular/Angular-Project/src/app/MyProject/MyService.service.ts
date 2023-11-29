import { Injectable } from "@angular/core";
import { SignUpData } from "./MyClass.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class AllService
{
    userUrl:string = "https://localhost:7242/api/Registrations/";
    loginData:SignUpData = new SignUpData();
    

    constructor(private MyHttp: HttpClient){}

    GetAllData() : Observable<SignUpData[]>
    {
        return this.MyHttp.get<SignUpData[]>(this.userUrl);
    }


    GetSingleData(userName:string) : Observable<SignUpData>
    {
        return this.MyHttp.get<SignUpData>(this.userUrl + `UserName/${userName}`);
    }

    InsertData()
    {
        return this.MyHttp.post(this.userUrl,this.loginData);
    }

    UpdateData()
    {

    }

    DeleteData()
    {

    }

    
    LogInAuthentication(allData:any)
    {

    }

    LogOutAuthentication()
    {

    }

    IsAuthenticated()
    {
        return sessionStorage.getItem('isLoggedIn') === 'true';
    }
}