export interface Alumno {
    id_alumnos?: number,
    nombre?: string,
    apellido_paterno?: string,
    apellido_materno?: string,
    fecha_nacimiento?: Date,
    
    tipo_pago?: number,
    
    status_pago?: true,
    pago_mensual?: number,
    descuento?: number,
    fecha_pago?: Date,
    tipo_alumno?: string,
    correo?: string,
    telefono?: string,
    turno?: string

    ciclo_escolar ?: string, 
    proxima_fecha_pago ?: Date ,

    nombre_tutor ?: string, 
    apellido_paterno_tutor ?: string,
    apellido_materno_tutor ?: string,

    telefono_tutor ?: string,




}