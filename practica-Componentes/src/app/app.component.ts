import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgentComponent } from './forms/agent/agent.component';
import { UserComponent } from './forms/user/user.component';
import { DateComponent } from './forms/date/date.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgentComponent, UserComponent, DateComponent, InputTextModule, ButtonModule, CalendarModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Asegúrate de que sea styleUrls, no styleUrl
})
export class AppComponent {
  title = 'practica-Componentes';
  usuarioData: any = {};
  vendedorData: any = {};
  fechasData: any = {};

  // Captura de datos del usuario
  capturarDatosUsuario(datos: any) {
    this.usuarioData = datos;
    console.log("Datos del Usuario capturados:", this.usuarioData);
  }

  // Captura de datos del vendedor
  capturarDatosVendedor(datos: any) {
    this.vendedorData = datos;
    console.log("Datos del Vendedor capturados:", this.vendedorData);
  }

  // Captura de datos de fechas
  capturarDatosFechas(datos: any) {
    this.fechasData = datos;
    console.log("Datos de Fechas capturados:", this.fechasData);
  }

  // Método para enviar todos los datos
  enviarDatos() {
    console.log("Datos del Usuario:", this.usuarioData);
    console.log("Datos del Vendedor:", this.vendedorData);
    console.log("Datos de Fechas:", this.fechasData);
  }

  // Método de prueba al presionar el botón
  prueba() {
    console.log("Botón de enviar presionado");
  }
}
