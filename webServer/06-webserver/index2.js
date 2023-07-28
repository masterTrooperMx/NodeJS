const http = require('http');

// request y response son objetos que se llenan en dos momentos diferentes, request es de entrada y response de salida
// cada cual se supone por el orden de llamada, el primero es request (o como le quieras poner) y el que sigue es response (o como le quieras poner)
http.createServer((request, response) => {
        //console.log(request);
        // le estamos mandando el header del tipo de datos a leer
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write('Hola Mundo\n');

        response.end();
    })
    .listen(8080);
console.log('escuchando 8080');