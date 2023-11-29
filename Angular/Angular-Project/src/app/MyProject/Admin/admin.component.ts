import { Component } from "@angular/core";
import { AllService } from "../MyService.service";
import { SignUpData } from "../MyClass.model";
@Component({
    selector:"admin-comp",
    templateUrl:"./admin.component.html",
    styleUrls:["./admin.component.css"],
    providers:[AllService]
})

export class AdminComponent 
{
    data:string="Hello Susanta Sau";
    dataArray:SignUpData[] = [];
    ShowHide:string = "Show";     

    constructor(private MyService:AllService){}

    ClickEvent():void
    {
        if(this.ShowHide === "Show")
        {
            this.ShowDetails();
        }
        else
        {
            this.HideDetails();
        }
    }
    ShowDetails():void
    {
        this.MyService.GetAllData().subscribe(data=>this.dataArray = data);
        this.ShowHide = "Hide";
    }
    HideDetails():void
    {        
        this.dataArray = [];
        this.ShowHide = "Show";
        
    }
}
    