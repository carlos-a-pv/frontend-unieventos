import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-registro-evento',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderAdminComponent, PostHeaderComponent, FooterComponent],
  templateUrl: './registro-evento.component.html',
  styleUrl: './registro-evento.component.css'
})
export class RegistroEventoComponent {
  crearEventoForm!: FormGroup;
  tiposDeEvento: string[];


  constructor(private formBuilder: FormBuilder){ 
    this.crearFormularioEvento();
    this.tiposDeEvento = ['Concierto', 'Fiesta', 'Teatro', 'Deportes'];
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
   

}
