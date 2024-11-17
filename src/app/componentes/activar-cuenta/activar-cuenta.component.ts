import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToeknService } from '../../servicios/token.service';
import { ValidarCuentaDTO } from '../../dto/cuenta/validar-cuenta-dto';
import { AuthService } from '../../servicios/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activar-cuenta',
  standalone: true,
  imports: [BackgroundComponent, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './activar-cuenta.component.html',
  styleUrl: './activar-cuenta.component.css'
})

export class ActivarCuentaComponent {
  title ='UniEventos';
  activarCuentaForm!: FormGroup;


  constructor(private formBuider: FormBuilder, private tokenService:ToeknService, private authService:AuthService, private router: Router){
    this.crearFormularioActivarCuenta();
  }
  private crearFormularioActivarCuenta (){
    this.activarCuentaForm = this.formBuider.group({
      id: this.tokenService.getIdCuenta(),
      codigoActivacion: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]]
    });
  }
  public validarCodigoCuenta(){
    let ValidarCuentaDTO = this.activarCuentaForm.value as ValidarCuentaDTO;
    
    this.authService.validarCuenta(ValidarCuentaDTO).subscribe({
      next: (data) => {
        this.router.navigate(['/home-cliente']).then(()=>{
          window.location.reload();
        })
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.error.respuesta
      });
      }
    });
  }
}
