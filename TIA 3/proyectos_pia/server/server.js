const express = require('express');
const cors = require('cors');
const tipo_proyectoRouter = require('./routes/tipo_proyecto');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/tipo_proyecto', tipo_proyectoRouter);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de Control de Proyectos' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});