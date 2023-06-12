const express = require('express');
const app = express();
const port = 3000;

// Ruta para los archivos estáticos (CSS, imágenes, etc.)
app.use(express.static('public'));

// Ruta para el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});