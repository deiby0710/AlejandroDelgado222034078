import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgentComponent } from './forms/agent/agent.component';
import { UserComponent } from './forms/user/user.component';
import { DateComponent } from './forms/date/date.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RegisterService } from './service/register.service';

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

  constructor(private fb: FormBuilder, private registerService: RegisterService){
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
      const {firstName,lastName,email,phone} = this.formUser.value;
      const {nameAgentFCN,emailAgentFCN} = this.formAgent.value;
      const {startDateFCN,endDateFCN,textAreaFCN} = this.formDate.value;
      this.registerService.Registrar(firstName,lastName,email,String(phone),nameAgentFCN,emailAgentFCN,startDateFCN,endDateFCN,textAreaFCN).subscribe({
        next: (response) => {
          console.log("Información enviada Exitosamente", response);
        },
        error: error =>{
          console.log("Error al enviar información", error);
        },
        complete:() => {
          console.log("Envío de información completado");
        },
      })

    }else{
      console.log('Formulario Invalido')
    }
  }
}
