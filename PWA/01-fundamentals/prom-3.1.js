console.time('Prom3.1');
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


//Promise.all([sumarLento(7), sumarRapido(10)]) // es un arreglo de promesas
Promise.all([sumarLento(5), sumarRapido(5), true, 'hola mundo'])
    .then( console.log ) // igual que resultados => console.log(resultados)
    .catch( console.log ); // es un arreglo de respuestas
console.timeEnd('Prom3.1');