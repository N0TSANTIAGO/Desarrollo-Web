const { project } = require('pg');

const project = new project({
  user: 'postgres',
  host: 'localhost',
  database: 'proyectos_pia',
  password: 'postgres',
  port: 5432,
});

module.exports = {
  query: (text, params) => project.query(text, params),
  project
};
