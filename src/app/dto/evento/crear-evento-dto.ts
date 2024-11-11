import { LocalidadDTO } from "./localidad-dto";

export interface CrearEventoDTO {
    nombre:string,
    descripcion:string,
    fecha:Date,
    tipo:string,
    direccion:string,
    ciudad:string,
    localidades:LocalidadDTO[],
    imagenPortada:string,
    imagenLocalidades:string,
    estado:string
}
