const express = require('express');
const mysql = require('mysql');
const app = express();

// conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'asistencia_web', // 
});

// Conexión a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión establecida con la base de datos');
});

// Ruta para registrar asistencia
app.post('/registro-asistencia', (req, res) => {
  // Obtener los datos de la asistencia desde la solicitud (por ejemplo, la cédula)
  const { cedula } = req.body;

  // Obtener la fecha y hora actual
  const fecha = new Date().toISOString().slice(0, 10);
  const hora = new Date().toLocaleTimeString();

  // Realizar el registro de asistencia en la base de datos
  const sql = 'INSERT INTO asistencia (cedula, hora_entrada, fecha_entrada) VALUES (?, ?, ?)';
  const values = [cedula, hora, fecha];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error al registrar la asistencia:', error);
      res.status(500).json({ error: 'Error del servidor' });
    } else {
      res.json({ mensaje: 'Asistencia registrada exitosamente' });
    }
  });
});
// Ruta para obtener los usuarios
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



// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

