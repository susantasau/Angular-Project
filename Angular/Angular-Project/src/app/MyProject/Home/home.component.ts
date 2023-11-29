import { Component, OnInit } from "@angular/core";
import { AllService } from "../MyService.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector:"home-comp",
    templateUrl:"./home.component.html",
    styleUrls:["./home.component.css"],
    providers:[AllService]
})

export class HomeComponent implements OnInit
{
    userName !: string;
    path :any[] = [];
    descPath : string = "../assets/JsonFiles/h";
    
    path1:string = "../assets/Images/h";
    constructor(private route:ActivatedRoute, private router:Router){}
    
     ngOnInit(): void {
        
         this.route.queryParams.subscribe(p=> this.userName  = p['name']);

         for(let i=1; i<11; i++)
         {            
            this.path.push({image:this.path1 + `${i}.jpg`,des:this.descPath + `${i}.json`});            
         }
         
     }
     IndividualProduct(p:any)
     {
        this.router.navigate(["/product"],{queryParams:{"pathName":p.image,"Description":p.des}});
     }
}