// Importa los módulos necesarios
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Lógica para el endpoint de inicio de sesión
exports.login = async (req, res) => {
  try {
    // Obtiene las credenciales del cuerpo de la solicitud
    const { username, password } = req.body;

    // Aquí iría la lógica para verificar las credenciales y autenticar al usuario
    // Por ejemplo, puedes buscar el usuario en la base de datos y comparar la contraseña con la versión almacenada encriptada

    // Genera un token JWT
    const token = jwt.sign({ username }, 'secretKey');

    // Devuelve el token en la respuesta
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error de servidor' });
  }
};
