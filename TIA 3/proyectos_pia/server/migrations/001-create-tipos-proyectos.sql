CREATE TABLE tipo_proyecto (
    id smallserial PRIMARY KEY,
    codigo varchar(8) UNIQUE,
    descripcion varchar NOT NULL,
    abreviatura varchar(6) NOT NULL,
    fecha_registro timestamp
);

select * from tipo_proyecto
