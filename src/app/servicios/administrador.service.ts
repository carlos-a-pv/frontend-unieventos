import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/jws/mensaje-dto';
import { Observable } from 'rxjs';
import { CrearEventoDTO } from '../dto/evento/crear-evento-dto';
import { EditarEventoDTO } from '../dto/evento/editar-evento-dto';


@Injectable({
 providedIn: 'root'
})
export class AdministradorService {


 private adminURL = "https://programacionavanzada.onrender.com/api/administrador/evento";


 constructor(private http: HttpClient) { }


 public crearEvento(crearEventoDTO: CrearEventoDTO): Observable<MensajeDTO> {
   return this.http.post<MensajeDTO>(`${this.adminURL}/crear-evento`, crearEventoDTO);
 }


 public actualizarEvento(editarEventoDTO: EditarEventoDTO): Observable<MensajeDTO> {
   return this.http.put<MensajeDTO>(`${this.adminURL}/editar-evento`, editarEventoDTO);
 }


 public obtenerEvento(id: string): Observable<MensajeDTO> {
   return this.http.get<MensajeDTO>(`${this.adminURL}/obtener-evento/${id}`);
 }


 public eliminarEvento(id: string): Observable<MensajeDTO> {
    console.log(`${this.adminURL}/eliminar-evento/${id}`);
   return this.http.delete<MensajeDTO>(`${this.adminURL}/eliminar-evento/${id}`);
 }


 public listarEventosAdmin(): Observable<MensajeDTO> {
   return this.http.get<MensajeDTO>(`${this.adminURL}/listar-eventos`);
 }


 public subirImagen(imagen: FormData): Observable<MensajeDTO> {
   return this.http.post<MensajeDTO>(`${this.adminURL}/imagen/subir`, imagen);
 }


}
