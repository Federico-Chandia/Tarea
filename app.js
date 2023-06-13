const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

/* configuraciones*/
app.use(express.static('public'))

/* Rutas */
app.get('/home',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/about',(req,res) => res.sendFile(path.join(__dirname,'views','about.html')));
app.get('/music',(req,res) => res.sendFile(path.join(__dirname,'views','music.html')))
app.get('/*',(req,res) => res.sendFile(path.join(__dirname,'views',)))
app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' +PORT));