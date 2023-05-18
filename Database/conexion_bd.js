const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',  
  user: 'root',         
  password: '',    
  database: '',
});

module.exports = connection;
