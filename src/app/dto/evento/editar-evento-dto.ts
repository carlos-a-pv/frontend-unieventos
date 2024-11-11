import { LocalidadDTO } from "./localidad-dto";

export interface EditarEventoDTO {
    id:string,
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
