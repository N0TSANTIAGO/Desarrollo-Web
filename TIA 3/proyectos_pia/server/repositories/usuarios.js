const db = require('../config/database');
const Usuario = require('../models/Usuario');

class UsuarioRepository {
  async getAll() {
    const { rows } = await db.query('SELECT * FROM usuarios');
    return rows.map(row => new Usuario(
      row.id,
      row.nombre,
      row.documento,
      row.fecha_ingreso,
      row.fecha_salida,
      row.estado
    ));
  }

  async getById(id) {
    const { rows } = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    if (rows.length === 0) return null;
    const row = rows[0];
    return new Usuario(
      row.id,
      row.nombre,
      row.documento,
      row.fecha_ingreso,
      row.fecha_salida,
      row.estado
    );
  }

  async create(usuario) {
    const { rows } = await db.query(
      'INSERT INTO usuarios (nombre, documento) VALUES ($1, $2) RETURNING *',
      [usuario.nombre, usuario.documento]
    );
    const row = rows[0];
    return new Usuario(
      row.id,
      row.nombre,
      row.documento,
      row.fecha_ingreso,
      row.fecha_salida,
      row.estado
    );
  }

  async update(id, usuario) {
    const { rows } = await db.query(
      'UPDATE usuarios SET nombre = $1, documento = $2 WHERE id = $3 RETURNING *',
      [usuario.nombre, usuario.documento, id]
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return new Usuario(
      row.id,
      row.nombre,
      row.documento,
      row.fecha_ingreso,
      row.fecha_salida,
      row.estado
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
    return new Usuario(
      row.id,
      row.nombre,
      row.documento,
      row.fecha_ingreso,
      row.fecha_salida,
      row.estado
    );
  }
}

module.exports = new UsuarioRepository();