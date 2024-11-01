import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgentComponent } from './forms/agent/agent.component';
import { UserComponent } from './forms/user/user.component';
import { DateComponent } from './forms/date/date.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgentComponent, UserComponent, DateComponent, InputTextModule, ButtonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-Componentes';
}
