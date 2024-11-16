import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cupon',
  standalone: true,
  imports: [],
  templateUrl: './cupon.component.html',
  styleUrl: './cupon.component.css'
})
export class CuponComponent {

  @Input() nombre!:String;
  @Input() descuento!:number;

}
