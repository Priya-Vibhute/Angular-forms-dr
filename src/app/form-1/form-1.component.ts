import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-1',
  imports: [FormsModule,CommonModule],
  templateUrl: './form-1.component.html',
  styleUrl: './form-1.component.css'
})
export class Form1Component {

  @ViewChild('myForm') form!:NgForm;

  onSubmit()
  {
    // console.log(this.form);
    console.log(this.form.value);
    this.form.reset()
    
  }

  fillValues()
  {
    this.form.setValue({
      email:"priyanka.vibhute@itvedant.com",
      password:"XYZ@1234"
    })
  }

}
