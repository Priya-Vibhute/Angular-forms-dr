import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form1Component } from "./form-1/form-1.component";
import { Form2Component } from "./form-2/form-2.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Form1Component, Form2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-forms';
}
