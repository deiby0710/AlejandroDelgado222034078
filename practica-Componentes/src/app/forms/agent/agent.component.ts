import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [InputTextModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'] // Asegúrate de que sea styleUrls
})
export class AgentComponent {
  @Input() agentFormFG: FormGroup;

  constructor(private fb: FormBuilder){
    this.agentFormFG = this.fb.group({
      nameAgentFCN: ['' , Validators.required],
      emailAgentFCN: ['', [Validators.required, Validators.email]]
    });
  }
}
