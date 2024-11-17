import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../servicios/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-cuenta',
  standalone: true,
  imports: [BackgroundComponent, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './recuperar-cuenta.component.html',
  styleUrl: './recuperar-cuenta.component.css'
})
export class RecuperarCuentaComponent {
  title ='UniEventos';
  recuperarCuentaForm!: FormGroup;

  constructor(private formBuider: FormBuilder, private authService:AuthService, private router:Router){
    this.crearFormularioRecuperarCuenta();
  }
  private crearFormularioRecuperarCuenta (){
    this.recuperarCuentaForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  public enviarCodigo(){
    let email = this.recuperarCuentaForm.value as String;
    this.authService.enviarCodigoRecuperacion(email).subscribe({
      next: (data) => {
        this.router.navigate(["/validar-codigo-recuperacion"]).then(()=>{
          window.location.reload();
        })
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: "Error",
          text: error.error.respuesta
        })
      }
    });
  }
}
