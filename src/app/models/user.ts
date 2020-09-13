export class User{
    constructor(
        public id:  number,
        public nombre: string,
        public apellido: string,
        public email: string,
        public rol:  string,
        public password: string,
        public descripcion: string,
        public image: string
    ){}
}