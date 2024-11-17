import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrearCuentaDTO } from '../dto/cuenta/crear-cuenta-dto';
import { MensajeDTO } from '../dto/jws/mensaje-dto';
import { LoginDTO } from '../dto/cuenta/login-dto';
import { ValidarCuentaDTO } from '../dto/cuenta/validar-cuenta-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "https://programacionavanzada.onrender.com/api/auth"

  constructor(private http: HttpClient) { }

  public crearCuenta(cuentaDTO: CrearCuentaDTO): Observable<MensajeDTO>{
    console.log(cuentaDTO);
    return this.http.post<MensajeDTO>(`${this.authURL}/crear-cuenta`, cuentaDTO);
  }

  public iniciarSesion(loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/iniciar-sesion`, loginDTO);
  }

  public validarCuenta(validarCuentaDTO: ValidarCuentaDTO): Observable<MensajeDTO>{
    return this.http.put<MensajeDTO>(`${this.authURL}/validar-correo`, validarCuentaDTO)
  }

  public enviarCodigoRecuperacion(email:String): Observable<MensajeDTO>{
    return this.http.put<MensajeDTO>(`${this.authURL}/codigo-recuperacion`, email,{
      headers: {'content-type': 'application/json'}
    });
  }
   
}
