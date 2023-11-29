import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyProject/Login/login.component';
import { SignupComponent } from './MyProject/Signup/signup.component';
import { AdminComponent } from "./MyProject/Admin/admin.component";
import { HomeComponent } from './MyProject/Home/home.component';
import { LogoutComponent } from './MyProject/Logout/logout.component';
import { ProductComponent } from './MyProject/Product/product.component';
import { MyAuthentication } from './MyProject/MyAuthentication.guard';
import { BillingComponent } from './MyProject/Billing/bill.component';
import { BoughtComponent } from './MyProject/Billing/bought.component';

const routes: Routes = [
  {path:"admin",component: AdminComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent,canActivate:[MyAuthentication]},
  {path:"",component:LogoutComponent},
  {path:"product",component:ProductComponent,canActivate:[MyAuthentication]},
  {path:"bill",component:BillingComponent,canActivate:[MyAuthentication]},
  {path:"bought",component:BoughtComponent,canActivate:[MyAuthentication]},
  {path:"",redirectTo:"/login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
