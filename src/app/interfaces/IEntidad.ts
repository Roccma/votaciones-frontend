export interface IEntidad{
    id: number;
    documento: string;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    dob: string;
    sexo: string;
    es_postulante?: boolean;
    clave?: string;
}