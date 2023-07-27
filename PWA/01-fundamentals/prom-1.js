function sumarUno(num, callback) { // le ponemos el nombre de la funcion de retorno
    if(num >= 7){
        callback('Numero muy alto!!');
        return;
    }
    // haciendola asincrona
    setTimeout(function() {
        //return num + 1;
        callback(null, num + 1); // los callbacks traen como primer argumento el error
    }, 800);
}

// hell de callbacks
sumarUno(5, function(error, nuevoValor){
    //console.log(nuevoValor);
    if(error){
        console.log(error);
        return;
    }
    // si la quiere mandar a llamar de nuevo con el nuevo valor
    sumarUno(nuevoValor, function(error, nuevoValor2){
        if(error){
            console.log(error);
            return;
        }
        sumarUno(nuevoValor2, function(error, nuevoValor3){
            if(error){
                console.log(error);
                return;
            }
            console.log(nuevoValor3);
        });
    });
});