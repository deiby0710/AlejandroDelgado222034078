import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent {

}
