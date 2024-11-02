import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';

  @Output() datosCapturados = new EventEmitter<{ 
    firstName: string; lastName: string;
    email: string; phone: string
  }>();

  // Método que se llamará cuando se desee enviar los datos
  enviarDatos() {
    this.datosCapturados.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email, 
      phone: this.phone
    });
  }
}
