import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-carrito',
  standalone: true,
  imports: [],
  templateUrl: './detalle-carrito.component.html',
  styleUrl: './detalle-carrito.component.css'
})
export class DetalleCarritoComponent {
  @Output() cerrarModal = new EventEmitter<void>();
  total:number;

  constructor(){
    this.total = 0;
  }

  cerrar():void {
    this.cerrarModal.emit();
  }
}
