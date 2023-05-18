const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM usuarios', (error, results) => {
    if (error) {
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ error: 'Error del servidor' });
    } else {
      res.json(results);
    }
  });
});

// Otras rutas y controladores...

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
