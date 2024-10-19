import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-formulario-plantilla1',
  standalone: true,
  imports: [PasswordModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './formulario-plantilla1.component.html',
  styleUrl: './formulario-plantilla1.component.css'
})
export class FormularioPlantilla1Component {
  user: string ='';
  password: string ='';
}
