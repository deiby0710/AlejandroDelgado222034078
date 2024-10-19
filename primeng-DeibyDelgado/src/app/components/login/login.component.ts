import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group (
    {
      usuario: ['', [Validators.required, Validators.name]],
      password: ['', Validators.required]
    }
  )

  // //Constructor: Creamos un objeto llamado fb que hereda de FormBuilder
  // constructor(private fb: FormBuilder){}
}