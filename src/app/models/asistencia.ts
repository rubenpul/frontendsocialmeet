export class Asistencia{
    constructor(
        public id_asistencia:  number,
        public id_meet: number,
        public meet: string,
        public id_usuario: number,
        public nombreusuario:  string,
        public asistio: boolean,
        public observaciones: string
    ){}
}