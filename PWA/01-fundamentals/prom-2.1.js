//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

function sumarUno(num) { // le ponemos el nombre de la funcion de retorno

    let promesa = new Promise(function(resolve, reject){ // dos callbacks
        // haciendola asincrona
        setTimeout(function() {
            //return num + 1;
            if(num >= 7) { // cuando ha fallado
                reject(`Numero muy alto!! ${num}`);
            }
            // cuando no ha fallado
            resolve(num + 1); // los callbacks traen como primer argumento el error
        }, 800);
    });
    return promesa;
}

// vamos a hacer encadenamiento de promesas
// res es el resultado, podria ser nuevoNumero
sumarUno(5).then((nuevoNumero) => {
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero);
})
.then(nuevoNumero => {
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero);
})
.then(nuevoNumero => {
    console.log(nuevoNumero);
})
.catch(err => {
    console.log('FIN.', err);
});