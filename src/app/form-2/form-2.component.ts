import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-2',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './form-2.component.html',
  styleUrl: './form-2.component.css'
})
export class Form2Component {

  reactiveForm!:FormGroup;

  ngOnInit()
  {
    this.reactiveForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  onSubmit()
  {
      console.log(this.reactiveForm)
    // console.log(this.reactiveForm.value)
    // console.log("Email",this.reactiveForm.get('email')?.value)
    // console.log("Password",this.reactiveForm.get('password')?.value)
    console.log("Email",this.reactiveForm.get('email')?.errors);
    console.log("password",this.reactiveForm.get('password')?.errors);
        console.log("password",this.reactiveForm.get('password')?.hasError('required'));


  }
}
