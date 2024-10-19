import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioPlantilla1Component } from './formularios/formulario-plantilla1/formulario-plantilla1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioPlantilla1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeng-DeibyDelgado';
}
