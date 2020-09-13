export class Inventario{
    constructor(
        public id_insumo:  number,
        public descripcion: string,
        public cantidad_disp: number,
        public cantidad_usada: number,
        public cantidad_ingresar: number
    ){}
}