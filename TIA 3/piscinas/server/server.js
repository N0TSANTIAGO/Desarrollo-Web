const express = require('express');
const cors = require('cors');
const usuariosRouter = require('./routes/usuarios');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuariosRouter);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de Control de Piscinas' });
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