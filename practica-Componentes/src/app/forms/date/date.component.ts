import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@Component({
  selector: 'app-date',
  standalone: true,
  imports: [CalendarModule, FormsModule, ReactiveFormsModule, CommonModule, InputTextModule, InputTextareaModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  @Input() dateFormFG: FormGroup;

  constructor(private fb: FormBuilder){
    this.dateFormFG = this.fb.group({
      startDateFCN: ['', Validators.required],
      endDateFCN: ['', Validators.required],
      textAreaFCN: ['',Validators.required]
    });
  }
}
