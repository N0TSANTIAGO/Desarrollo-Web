const db = require('../config/database');
const tipo_proyecto = require('../models/tipo_proyecto');

class tipo_proyectoRepository {
  async getAll() {
    const { rows } = await db.query('SELECT * FROM usuarios');
    return rows.map(row => new tipo_proyecto(
      row.id,
      row.codigo,
      row.descripcion,
      row.abreviatura,
      row.fecha_registro
    ));
  }

  async getById(id) {
    const { rows } = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    if (rows.length === 0) return null;
    const row = rows[0];
    return new tipo_proyecto(
      row.id,
      row.codigo,
      row.descripcion,
      row.abreviatura,
      row.fecha_registro
    );
  }

  async create(tipo_proyecto) {
    const { rows } = await db.query(
      'INSERT INTO usuarios (nombre, documento) VALUES ($1, $2) RETURNING *',
      [tipo_proyecto.nombre, tipo_proyecto.documento]
    );
    const row = rows[0];
    return new Usuario(
      row.id,
      row.codigo,
      row.descripcion,
      row.abreviatura,
      row.fecha_registro
    );
  }

  async update(id, tipo_proyecto) {
    const { rows } = await db.query(
      'UPDATE usuarios SET nombre = $1, documento = $2 WHERE id = $3 RETURNING *',
      [tipo_proyecto.nombre, tipo_proyecto.documento, id]
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return new tipo_proyecto(
      row.id,
      row.codigo,
      row.descripcion,
      row.abreviatura,
      row.fecha_registro
    );
  }

  async delete(id) {
    const { rowCount } = await db.query('DELETE FROM usuarios WHERE id = $1', [id]);
    return rowCount > 0;
  }

  async registrarSalida(id) {
    const { rows } = await db.query(
      'UPDATE usuarios SET fecha_salida = CURRENT_TIMESTAMP, estado = \'FUERA\' WHERE id = $1 RETURNING *',
      [id]
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return new tipo_proyecto(
      row.id,
      row.codigo,
      row.descripcion,
      row.abreviatura,
      row.fecha_registro
    );
  }
}

module.exports = new tipo_proyectoRepository();
