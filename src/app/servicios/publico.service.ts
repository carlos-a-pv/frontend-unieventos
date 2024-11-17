import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/jws/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicoService {

  private publicoURL = "https://programacionavanzada.onrender.com/api/publico"

  constructor(private http: HttpClient) { }

  public listarEventos(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/evento/obtener-todos`);
  }
}
