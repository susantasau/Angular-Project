import { HttpClient } from "@angular/common/http";
import { Component,Injectable,OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ProductClass } from "./product.model";

@Component({
    selector:"product-comp",
    templateUrl:"./product.component.html",
    styleUrls:["./product.component.css"]
})
@Injectable({
    providedIn:'root'
})
export class ProductComponent implements OnInit
{
    path1:string = "../assets/Images/h1.jpg";
    paths!:string;
    Url !: string;
    File !: string;
    des !:string;
    price!:number;
    

    constructor(private route:ActivatedRoute,private MyHttp:HttpClient,private router:Router){}
    ngOnInit():void
    {
        this.route.queryParams.subscribe(p=> {this.paths  = p['pathName'],this.Url = p["Description"]});   
        this.MyFunction().subscribe(p=> {this.File = p.Name, this.des = p.Description, this.price = p.Price});        
    }

    MyFunction(): Observable<ProductClass>
    {
        return this.MyHttp.get<ProductClass>(this.Url);
    }

    BuyButton()
    {
        this.router.navigate(["bill"],{queryParams:{"FileName":this.File,"Value":this.price}});
    }
}