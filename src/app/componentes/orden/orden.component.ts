import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orden',
  standalone: true,
  imports: [],
  templateUrl: './orden.component.html',
  styleUrl: './orden.component.css'
})
export class OrdenComponent {
  @Input() nombreEvento!:String;
  @Input() fecha:Date;
  @Input() total:number;
  @Input() urlImagenEvento:string;
  @Input() items:[];

  constructor(){
    this.fecha = new Date();
    this.total = 0;
    this.urlImagenEvento = "";
    this.items = [];
  }
}
