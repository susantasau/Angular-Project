import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllService } from '../MyService.service';
import { SignUpData } from '../MyClass.model';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AllService],
})
export class SignupComponent implements OnInit
{
  ConPass!: string; 
  allUser:SignUpData[] = []; 

  constructor(public MyServe: AllService) {} 

  ngOnInit(): void 
  {
    
  }


  SubmitData(MyForm: NgForm) 
  {
    // this.MyServe.GetAllData().subscribe(data=>this.allUser = data);
    // for(let a of this.allUser)
    // {
    //   if(MyForm.value['mob']===a.mobile_No)
    //   {
    //     console.log(a.email_Id);
    //   }
    // }
    
    console.log(MyForm.value);
    this.MyServe.InsertData().subscribe((d) => {
      alert('Successfully Submited');
    });

    this.ResetForm(MyForm);
  }

  ResetForm(MyForm: NgForm) {
    MyForm.form.reset();
  }

  Submit()
  {

  }
}

// (change)="MainData(MyForm)"