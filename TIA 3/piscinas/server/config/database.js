const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'piscinas_db',
  password: 'tu_contraseña',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};