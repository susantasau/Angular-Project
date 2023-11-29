import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl:"./bill.component.html",
    styleUrls:["./bill.component.css"],
    providers:[]
})

export class BillingComponent implements OnInit
{
    File!:any;
    price!:any;
    hide:boolean = false;
    Continue:string = "Continue";
    constructor(private route:ActivatedRoute,private router:Router){}

    ngOnInit(): void {
        this.route.queryParams.subscribe(data=>{this.File = data["FileName"],this.price = data["Value"]})
    }

    PaymentOption()
    {
        if(this.Continue == "Continue")
        {
            this.hide = true;
            this.Continue = "Submit";
        }

        else
        {
            this.router.navigate(["bought"]);
        }
    }    
}