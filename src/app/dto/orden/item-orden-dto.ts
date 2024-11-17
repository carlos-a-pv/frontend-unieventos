export interface ItemOrdenDTO {
    idOrden:string;
    fecha:Date;
    idCupon:string;
    items:[{}];
    total:number
}