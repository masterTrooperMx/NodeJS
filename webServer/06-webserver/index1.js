const http = require('http');

http.createServer((request, response) => {
        //console.log(request);
        // le estamos mandando el header del tipo de datos a leer
        //response.writeHead(200, { "Content-Type": "text/plain" });
        //response.writeHead(200, { "Content-Type": "application/json" });
        response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
        response.writeHead(200, { "Content-Type": "application/csv" });
        // mandando un json
        // const persona = {
        //     id: 1,
        //     nombre: 'jesus'
        // };
        //response.write(JSON.stringify(persona));
        //response.write('404 | page not found');
        // mandando un csv
        response.write('id, nombre\n');
        response.write('1, jesus\n');
        response.write('2, laura\n');
        response.write('3, jessy\n');

        response.end();
    })
    .listen(8080);
console.log('escuchando 8080');