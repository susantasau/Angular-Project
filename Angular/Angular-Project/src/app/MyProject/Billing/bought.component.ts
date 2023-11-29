import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    template:"<h1>Your order has placed</h1><br><h3>Get delivery within 5 working days</h3><br><button (click)='Exit()'>Close</button>",
    styles:["button{margin-left:45%; color:white; background-color:red; height:35px; font-size:20px;}"]
})

export class BoughtComponent
{
    constructor(private router:Router){}
    Exit()
    {
        this.router.navigate(["/home"]);
    }
}