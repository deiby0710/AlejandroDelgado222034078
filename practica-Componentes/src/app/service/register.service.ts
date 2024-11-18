import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // La url es la url base y esa se la puede extender dependiendo de lo que se quiera utilizar
  // El constructor se le dice que es lo que va a utilizar, en este caso se va utilizar una variable
  // de tipo privado de tipo HttpClient
  // Url del Api almacenada de forma privada
  // Defino esta url que va recibir los datos
  apiUrl= "https://localhost:7162/api/Users";
  constructor(private http: HttpClient) { }
    // defino metodo que va enviar
    Registrar(firstName: string, lastName: string, email: string, phone: string, nameAgentFCN: string, emailAgentFCN: string, startDateFCN: string, endDateFCN: string, textAreaFCN: string):Observable<any>{
    // const body = {username,lastname,email,phone,namegerente,emailgerente,dateinicio,datefin,notas};
    return this.http.post(`${this.apiUrl}/Registrar`, {firstName,lastName,email,phone,nameAgentFCN,emailAgentFCN,startDateFCN,endDateFCN,textAreaFCN});
    }
}



