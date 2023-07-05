export interface Alumno {
    id_alumnos?: number,
    nombre?: string,
    apellido_paterno?: string,
    apellido_materno?: string,
    fechaDeNacimiento?: Date,
    direccion?: string,
    tipoPago?: number,
    statusPago?: true,
    pagoMensual?: number,
    descuento?: number,
    fechaPago?: Date,
    tipoAlumno?: string,
    correo?: string,
    telefono?: string,
    turno?: string
}