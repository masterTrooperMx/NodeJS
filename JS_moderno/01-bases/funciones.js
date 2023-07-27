function saludo (nombre) {
    console.log(arguments);
    console.log("Hola", nombre);
}

saludo("Jesus");
saludo("Jesus", 20, {time: 12.34}, ['a',17, 777]);

const saludo2 = (nombre) => {
    console.log(arguments);
    console.log("Hola", nombre, "flecha");
}

saludo2("Jesus");
saludo2("Jesus", 20, {time: 12.34}, ['a',17, 777], false);

const aleatorio = () => {
    return Math.random();
}

console.log(aleatorio());