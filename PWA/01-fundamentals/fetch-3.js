// https://reqres.in/api/users/2
let usuario = {
    nombre: 'Jesus',
    edad: 50
};

fetch('https://reqres.in/api/users/2',
    {
        method: 'POST',
        body:    JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
.then(resp => resp.json())
.then(console.log)
.catch(console.error);