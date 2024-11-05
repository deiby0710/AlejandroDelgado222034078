import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgentComponent } from './forms/agent/agent.component';
import { UserComponent } from './forms/user/user.component';
import { DateComponent } from './forms/date/date.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgentComponent, UserComponent, DateComponent, InputTextModule, ButtonModule, CalendarModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Asegúrate de que sea styleUrls, no styleUrl
})
export class AppComponent {
  formUser: FormGroup;
  formAgent: FormGroup;
  formDate: FormGroup;

  constructor(private fb: FormBuilder){
    this.formUser = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
    this.formAgent = this.fb.group({
      nameAgentFCN: ['' , Validators.required],
      emailAgentFCN: ['', [Validators.required, Validators.email]]
    });
    this.formDate = this.fb.group({
      startDateFCN: ['', Validators.required],
      endDateFCN: ['', Validators.required],
      textAreaFCN: ['',Validators.required]
    });
  }

  onSubmit() {
    if(this.formUser.valid && this.formAgent.valid && this.formDate.valid){
      console.log("Nombre: ", this.formUser.value["firstName"])
      console.log("Apellido: ", this.formUser.value["lastName"])
      console.log("Email: ", this.formUser.value["email"])
      console.log("Celular: ", this.formUser.value["phone"])
      console.log("Nombre: ", this.formAgent.value["nameAgentFCN"])
      console.log("Email: ", this.formAgent.value["emailAgentFCN"])
      console.log("Fecha inicio: ", this.formDate.value["endDateFCN"])
      console.log("Fecha de finalizacion: ", this.formDate.value["startDateFCN"])
      console.log("Notas: ", this.formDate.value["textAreaFCN"])
    }else{
      console.log('Formulario Invalido')
    }
  }
}
