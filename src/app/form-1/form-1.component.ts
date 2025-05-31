import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-1',
  imports: [FormsModule],
  templateUrl: './form-1.component.html',
  styleUrl: './form-1.component.css'
})
export class Form1Component {

  onSubmit(form:NgForm)
  {
    console.log(form);
    
  }

}
