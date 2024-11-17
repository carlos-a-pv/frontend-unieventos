import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {

  @Input() titulo:String = "texto de prueba";
  @Input() ciudad:String = "";
  @Input() direccion:String = "";
  @Input() fecha!:Date;
  @Input() urlImagenPoster!:String;

  
  constructor(){
    
  }

  public comprar():void {
    
  }
}
