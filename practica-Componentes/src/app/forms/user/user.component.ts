import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
