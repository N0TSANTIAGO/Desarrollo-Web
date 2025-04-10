const express = require('express');
const router = express.Router();
const tipo_proyectoRepository = require('../repositories/tipo_proyecto');

// GET todos los proyecto
router.get('/', async (req, res) => {
  try {
    const tipo_proyecto = await tipo_proyectoRepository.getAll();
    res.status(200).json(tipo_proyecto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los proyectos', error: error.message });
  }
});

// POST crear nuevo proyecto
router.post('/', async (req, res) => {
  try {
    const NuevoTipo_proyecto = await tipo_proyectoRepository.create(req.body);
    res.status(201).json({ 
      message: 'proyecto creado exitosamente',
      tipo_proyecto: NuevoTipo_proyecto
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al cargar el proyecto', error: error.message });
  }
});

// PUT actualizar proyecto
router.put('/:id', async (req, res) => {
  try {
    const tipo_proyectoActualizado = await tipo_proyectoRepository.update(req.params.id, req.body);
    if (tipo_proyectoActualizado) {
      res.status(200).json({ 
        message: 'proyecto actualizado exitosamente',
        tipo_proyecto: tipo_proyectoActualizado
      });
    } else {
      res.status(404).json({ message: 'proyecto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al actualizar el proyecto', error: error.message });
  }
});

// DELETE eliminar proyecto
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await tipo_proyectoRepository.delete(req.params.id);
    if (eliminado) {
      res.status(200).json({ message: 'proyecto eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'proyecto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el proyecto', error: error.message });
  }
});
module.exports = router;
