class Usuario {
    constructor(id, nombre, documento, fecha_ingreso, fecha_salida, estado) {
      this.id = id;
      this.nombre = nombre;
      this.documento = documento;
      this.fecha_ingreso = fecha_ingreso;
      this.fecha_salida = fecha_salida;
      this.estado = estado;
    }
  }
  
  module.exports = Usuario;