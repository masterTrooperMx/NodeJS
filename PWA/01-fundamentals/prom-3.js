function sumarLento(num) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve( num + 1);
        }, 800);
    });
}

let sumarRapido = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num + 1);
        }, 200);
    });
}

sumarLento(5).then( console.log );

sumarRapido(10).then( console.log );