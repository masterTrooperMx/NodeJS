// https://reqres.in/api/users/2
fetch('https://reqres.in/api/users/2')
    .then( resp => {
        resp.json().then(console.log);  // dado que la respuesta el JSON lo pasamos por el metodo json
    } )