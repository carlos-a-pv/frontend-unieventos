import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { CrearCuentaDTO } from '../../dto/cuenta/crear-cuenta-dto';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [BackgroundComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent{


 registroForm!: FormGroup;


 constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) { 
  this.crearFormulario();
 }

 private crearFormulario() {
  this.registroForm = this.formBuilder.group({
    cedula: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]],
    confirmaPassword: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]]
  },
  { validators: this.passwordsMatchValidator } as AbstractControlOptions
  );
}
passwordsMatchValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const confirmaPassword = formGroup.get('confirmaPassword')?.value;
 
 
  // Si las contraseñas no coinciden, devuelve un error, de lo contrario, null
  return password == confirmaPassword ? null : { passwordsMismatch: true };
 }
 
  public registrar() {
    const crearCuenta = this.registroForm.value as CrearCuentaDTO;
    this.authService.crearCuenta(crearCuenta).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Cuenta creada',
          text: 'La cuenta se ha creado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
        this.router.navigate(['/login']).then(()=>{
          window.location.reload();
        })

      },
      error: (error)=>{
        Swal.fire({
          title: 'Error',
          text: 'error.error.respuesta',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }
    });
  }


}
