import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BackgroundComponent } from "../background/background.component";
import { AuthService } from '../../servicios/auth.service';
import { ToeknService } from '../../servicios/token.service';
import { LoginDTO } from '../../dto/cuenta/login-dto';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, BackgroundComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'UniEventos';
  loginForm!: FormGroup;

  constructor(private formBuider: FormBuilder, private authService: AuthService, private tokenService: ToeknService){
    this.crearFormularioLogin();
  }
  private crearFormularioLogin(){
    this.loginForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(7)]]
     })
  }
  public ingresar(){
    console.log(this.loginForm.value)
    const loginDTO = this.loginForm.value as LoginDTO;


    this.authService.iniciarSesion(loginDTO).subscribe({
      next: (data) => {
        this.tokenService.login(data.respuesta.token);
      },
      error: (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.error.respuesta
        });
      },
    });
   
  }

}
