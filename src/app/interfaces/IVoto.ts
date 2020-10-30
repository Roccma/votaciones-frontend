export interface IVoto{
    id: number;
    fecha: string;
    nombre_votante: string;
    apellido_votante: string;
    nombre_postulante: string;
    apellido_postulante: string;
    documento_votante?: string;
    direccion_votante?: string;
    telefono_votante?: string;
    dob_votante?: string;
    sexo_votante?: string;
    es_postulante_votante?: boolean;
    documento_postulante?: string;
}