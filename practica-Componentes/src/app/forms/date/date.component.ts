import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  firstDate: Date | null = null;
  finishDate: Date | null= null;
  textArea: string = ''; 
  @Output() datosCapturados = new EventEmitter<{
    firstDate1: Date | null;
    finishDate1: Date | null;
    textArea1: string;
  }>();

  // Método que se llamará cuando se desee enviar los datos
  enviarDatos() {
    this.datosCapturados.emit({
      firstDate1: this.firstDate,
      finishDate1: this.finishDate,
      textArea1: this.textArea
    });
  }
}
