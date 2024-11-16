import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // URL del API almacenada de forma privada
  apiUrl= 'https://localhost:5050/api/Users'

  constructor(private http: HttpClient) { }

  // observable es un objeto que representa un flujo de datos que se puede manejar
  // de forma asincrona. Los observables son parte de la biblioteca RxJS (Reactive extension for Javascript)
  // y se utiliza principalmente para manejar eventos o flujos de datos que pueden ocurrir en el futuro, 
  // como respuestas de peticiones HTTP, eventos del usuario - se controla con HttpClientModule
      
    send(username: string, lastname: string, correo: string, telefono: string, namegerente: string, correogerente: string, fechainicio: string, fechafin: string, notas: string):Observable<any>{
    const body = {username,lastname,correo,telefono,namegerente,correogerente,fechainicio,fechafin,notas};
    return this.http.post(`${this.apiUrl}/Registrar`, {username,lastname,correo,telefono,namegerente,correogerente,fechainicio,fechafin,notas});
    }
}
