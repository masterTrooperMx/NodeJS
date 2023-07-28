const express = require('express');
const app = express(); // creamos la instancia app del objeto express
const port = 8080;

// servir el contenido estatico, del folder 'public'
app.use(express.static('public'));

// sobrecarga este path, public tien prioridad sobre los paths creados
//app.get('/', function(request, response) {
app.get('/', (request, response) => {
    response.send('Home Page');
});

//app.get('/hola-mundo', function(request, response) {
app.get('/hola-mundo', (request, response) => {
    response.send('Hola mundo!');
});

//app.get('*', function(request, response) {
app.get('*', (request, response) => {
    //response.send('404 | Page not found');
    console.log(__dirname);
    response.sendFile(__dirname + '/public/index.html');
});

//app.listen(8080);
// con callback
app.listen(port, () => {
    console.log(`escuchando puerto ${port}`);
});
//console.log('escuchando puerto 8080...');