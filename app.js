const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;


const db = mysql.createConnection({
  host: 'localhost',
  user: 'Kevin',
  password: '4321',
  database: 'testweb'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

app.get('/crear-tabla-usuarios', (req, res) => {
  const sql = 'CREATE TABLE IF NOT EXISTS usuarios (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255), email VARCHAR(255))';
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send('Tabla de usuarios creada');
  });
});

app.get('/crear-tabla-productos', (req, res) => {
  const sql = 'CREATE TABLE IF NOT EXISTS productos (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255), precio DECIMAL(10, 2))';
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send('Tabla de productos creada');
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
