require('dotenv').config();
const express = require('express');
const app = express(); // creamos la instancia app del objeto express
//const port = 8000;
const port = process.env.PORT;
const hbs = require('hbs');

// ya se puede renderizar con hbs patron MVC
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(error){console.error(error)});
// servir el contenido estatico, del folder 'public'
app.use(express.static('public'));

// sobrecarga este path, public tien prioridad sobre los paths creados
app.get('/', (request, response) => {
    // Controlador
    //response.send('Hola Mundo HBS');
    response.render('home', {
        nombre: 'Jesus Cruz',
        titulo: 'ROAD Trip - Home'
    }); // llamada a la vista
});

app.get('/generic', (request, response) => {
    //response.sendFile(__dirname + '/public/generic.html');
    response.render('generic', {
        nombre: 'Jesus Cruz',
        titulo: 'ROAD Trip - Generic'
    });
});

app.get('/elements', (request, response) => {
    //response.sendFile(__dirname + '/public/elements.html');
    response.render('elements', {
        nombre: 'Jesus Cruz',
        titulo: 'ROAD Trip - Elements'
    });
});

app.get('*', (request, response) => {
    //response.send('404 | Page not found');
    //console.log(__dirname);
    //response.sendFile(__dirname + '/public/index.html');
    response.render('home', {
        nombre: 'Jesus Cruz',
        titulo: 'ROAD Trip - Home'
    });
});

// con callback
app.listen(port, () => {
    console.log(`escuchando puerto ${port}`);
});