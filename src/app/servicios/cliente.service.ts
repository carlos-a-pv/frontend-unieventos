import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/jws/mensaje-dto';
import { ToeknService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteURL = "https://programacionavanzada.onrender.com/api/cliente"

  constructor(private http: HttpClient, private tokenService:ToeknService) { }

  public listarCupones(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/cupon/obtener-cupones`);
  }

  public listarOrdenes(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/orden/historial-ordenes/${this.tokenService.getIdCuenta()}`)
  }
}
