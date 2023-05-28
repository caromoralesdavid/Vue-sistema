const express = require('express');
const mysql = require('mysql');
const app = express();

const cors = require('cors')
app.use(express.json())
app.use(cors())

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
  // Obtener los datos de la asistencia desde la solicitud
  const { cedula } = req.body;
  console.log(cedula)

  // Obtener la fecha y hora actual
  const fecha = new Date().toISOString().slice(0, 10);
  const hora = new Date().toLocaleTimeString();

  const values = [cedula, fecha, hora];
  // Realizar el registro de asistencia en la base de datos
  const sql = 'INSERT INTO registros (cedula, fecha, hora) VALUES (?, ?, ?)';


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

// Ruta para crear un usuario
app.post('/create-user', (req, res) => {
  // Obtener los datos del usuario desde la solicitud
  const { username, password } = req.body;

  // Verificar si el usuario ya existe en la base de datos
  const checkUserQuery = 'SELECT * FROM usuarios WHERE username = ?';
  connection.query(checkUserQuery, [username], (error, results) => {
    if (error) {
      console.error('Error al verificar el usuario:', error);
      res.status(500).json({ error: 'Error del servidor' });
    } else if (results.length > 0) {
      res.status(409).json({ error: 'El usuario ya existe' });
    } else {
      // Insertar el nuevo usuario en la base de datos
      const insertUserQuery = 'INSERT INTO usuarios (username, password) VALUES (?, ?)';
      connection.query(insertUserQuery, [username, password], (error, results) => {
        if (error) {
          console.error('Error al crear el usuario:', error);
          res.status(500).json({ error: 'Error del servidor' });
        } else {
          res.json({ mensaje: 'Usuario creado exitosamente' });
        }
      });
    }
  });
});  

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

