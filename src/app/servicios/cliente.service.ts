import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/jws/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private publicoURL = "http://localhost:8080/api/cliente/cupon"

  constructor(private http: HttpClient) { }

  public listarCupones(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/obtener-cupones`);
  }
}
