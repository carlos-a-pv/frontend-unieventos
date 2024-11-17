import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

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


  constructor(private formBuilder: FormBuilder){ 
    this.crearFormularioEvento();
    this.tiposDeEvento = ['DEPORTE','CONCIERTO','CULTURA','MODA','BELLEZA'];
    
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
      imagenLocalidades: ['', [Validators.required]]
    });
   
  }
  public crearEvento(){
    console.log(this.crearEventoForm.value);
   }
   
  public onFileChange(event:any, tipo:string){
    if (event.target.files.length > 0) {
      const files = event.target.files;     
   
   
      switch(tipo){
        case 'localidades':
          this.crearEventoForm.get('imagenLocalidades')?.setValue(files[0]);
          break;
        case 'portada':
          this.crearEventoForm.get('imagenPortada')?.setValue(files[0]);
          break;
      }
   
   
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
      capacidad: [1, [Validators.required, Validators.min(1)]],
    });

    this.localidades.push(nuevaLocalidad);
  }

  // Función para eliminar una localidad específica
  eliminarLocalidad(index: number) {
    this.localidades.removeAt(index);
  }
}
   

