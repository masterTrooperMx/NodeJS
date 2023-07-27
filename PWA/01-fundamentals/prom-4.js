console.time('Prom4');
function sumarLento(num) {
    return new Promise((resolve, reject) => {
        if(num > 7){
            reject(`Numero muy alto ${num}`);
        }
        setTimeout(function(){
            resolve( num + 1);
        }, 800);
    });
}

let sumarRapido = (num) => {
    return new Promise((resolve, reject) => {
        if(num >= 7){
            reject(`Numero mas o menos alto ${num}`);
        }
        setTimeout(() => {
            resolve(num + 1);
        }, 200);
    });
}

//Promise.race([sumarLento(5), sumarRapido(5), true, 'hola mundo']) gana true!
Promise.race([sumarLento(5), sumarRapido(10)]) // en este caso si lo que termina primero es el error, este se maneja y gana la carrera
    .then( console.log ) // igual que resultados => console.log(resultados)
    .catch( console.log ); // es un arreglo de respuestas
console.timeEnd('Prom4');