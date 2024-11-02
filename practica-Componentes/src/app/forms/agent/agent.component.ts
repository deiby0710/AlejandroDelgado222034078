import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'] // Asegúrate de que sea styleUrls
})
export class AgentComponent {
  nameAgent: string = ''; 
  emailAgent: string = ''; 

  @Output() datosCapturados = new EventEmitter<{ nameAgent: string; emailAgent: string }>();

  // Método que se llamará cuando se desee enviar los datos
  enviarDatos() {
    console.log('Mandamos los datos desde agent:', {
      nameAgent: this.nameAgent,
      emailAgent: this.emailAgent
    });
    this.datosCapturados.emit({
      nameAgent: this.nameAgent,
      emailAgent: this.emailAgent
    });
  }
}
