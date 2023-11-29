import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './MyProject/Signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './MyProject/Home/home.component';
import { LoginComponent } from './MyProject/Login/login.component';
import { AdminComponent } from './MyProject/Admin/admin.component';
import { LogoutComponent } from './MyProject/Logout/logout.component';
import { NavbarComponent } from './MyProject/NavBar/navbar.component';
import { ProductComponent } from './MyProject/Product/product.component';
import { BillingComponent } from './MyProject/Billing/bill.component';

@NgModule({
  declarations: [
    AppComponent,SignupComponent,HomeComponent,LoginComponent,LogoutComponent,
    AdminComponent,NavbarComponent,BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
