const express = require('express');
const router = express.Router();

// Importa el controlador de autenticación
const authController = require('../controllers/authController');

// Ruta para iniciar sesión
router.post('/login', authController.login);

// Exporta el router
module.exports = router;
