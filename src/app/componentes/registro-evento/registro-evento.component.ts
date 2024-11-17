import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { AdministradorService } from '../../servicios/administrador.service';
import { CrearEventoDTO } from '../../dto/evento/crear-evento-dto';
import { ImagenesService } from '../../servicios/imagenes.service';

@Component({
  selector: 'app-registro-evento',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderAdminComponent, PostHeaderComponent, FooterComponent, CommonModule],
  templateUrl: './registro-evento.component.html',
  styleUrl: './registro-evento.component.css'
})
export class RegistroEventoComponent {
  crearEventoForm!: FormGroup;
  tiposDeEvento: string[];
  estados: String[];
  imagenPortada?: File;
  imagenLocalidades?: File;


  constructor(private formBuilder: FormBuilder, private administradorService:AdministradorService, private imagenSevice:ImagenesService){ 
    this.crearFormularioEvento();
    this.tiposDeEvento = ['DEPORTE','CONCIERTO','CULTURA','MODA','BELLEZA'];
    this.estados=['ACTIVA','INACTIVA']

    
  }

  private crearFormularioEvento(){
    this.crearEventoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      tipoEvento: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      localidades: this.formBuilder.array([]),
      imagenPortada: ['', [Validators.required]],
      imagenLocalidades: ['', [Validators.required]],
      estado: ['', [Validators.required]]
    });
   
  }
  public crearEvento(){


    const crearEventoDTO = this.crearEventoForm.value as CrearEventoDTO;
    console.log(crearEventoDTO)
   
    this.administradorService.crearEvento(crearEventoDTO).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Cuenta creada',
          text: 'La cuenta se ha creado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
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
   

   public onFileChange(event: any, tipo: string) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      tipo == 'localidades' ? (this.imagenLocalidades = file) : (this.imagenPortada = file);
    }
   }
   
     // Getter para acceder al FormArray de localidades
  get localidades(): FormArray {
    return this.crearEventoForm.get('localidades') as FormArray;
  }

  // Función para añadir una nueva localidad
  public anadirLocalidad() {
    const nuevaLocalidad = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      precio: [0, [Validators.required, Validators.min(0)]],
      capacidadMaxima: [1, [Validators.required, Validators.min(1)]],
    });

    this.localidades.push(nuevaLocalidad);
  }

  // Función para eliminar una localidad específica
  eliminarLocalidad(index: number) {
    this.localidades.removeAt(index);
  }

  public subirImagen(tipo:string){
    const formData = new FormData();
    const imagen = tipo == 'portada' ? this.imagenPortada : this.imagenLocalidades;
    const formControl = tipo == 'portada' ? 'imagenPortada' : 'imagenLocalidades';
   
   
    formData.append('imagen', imagen!);
   
   
    this.imagenSevice.subirImagen(formData).subscribe({
      next: (data) => {
        this.crearEventoForm.get(formControl)?.setValue(data.respuesta);
        Swal.fire("Exito!", "Se ha subido la imagen.", "success");
      },
      error: (error) => {
        Swal.fire("Error!", error.error.respuesta, "error");
      }
    });
   
   
   }
   
}

   

