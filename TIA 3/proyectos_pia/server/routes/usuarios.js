const express = require('express');
const router = express.Router();
const usuarioRepository = require('../repositories/usuarios');

// GET todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await usuarioRepository.getAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
  }
});

// POST crear nuevo usuario
router.post('/', async (req, res) => {
  try {
    const nuevoUsuario = await usuarioRepository.create(req.body);
    res.status(201).json({ 
      message: 'Usuario creado exitosamente',
      usuario: nuevoUsuario
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al crear usuario', error: error.message });
  }
});

// PUT actualizar usuario
router.put('/:id', async (req, res) => {
  try {
    const usuarioActualizado = await usuarioRepository.update(req.params.id, req.body);
    if (usuarioActualizado) {
      res.status(200).json({ 
        message: 'Usuario actualizado exitosamente',
        usuario: usuarioActualizado
      });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al actualizar usuario', error: error.message });
  }
});

// DELETE eliminar usuario
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await usuarioRepository.delete(req.params.id);
    if (eliminado) {
      res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar usuario', error: error.message });
  }
});

module.exports = router;