/**
 * 2C = 2 clubs = 2 treboles
 * 2H = 2 hearts = 2 corazones
 * 2D = 2 diamonds = 2 diamantes
 * 2S = 2 spades = 2 spadas
 */

let deck = [];
let card = '';

const crearDeck = () => {
    const tipos = ['C', 'H', 'D', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];

    for(let i = 2; i <= 10; i++){
        //for(let j = 0; j < tipos.length; j++) {
        for(let tipo of tipos){
            //deck.push(i + tipos[j]);
            deck.push(i + tipo);
        }
    }

    for(let espe of especiales){
        for(let tipo of tipos){
            deck.push(espe + tipo);
        }
    }
    //console.log(deck);
    //console.log(_.shuffle(deck));
    return _.shuffle(deck);
}

console.log(deck = crearDeck());

const pedirCarta = () => {
    if( deck.length > 0){
        //return deck.splice(0,1); // este regres aun arreglo con 1 carta
        return deck.shift(); // este regresa el nombre de la carta como string
    } else {
        throw('Ya no hay cartas en el mazo');
    }
}

//deck = []; // para probar el throw
console.log(card = pedirCarta());

const valorCarta = (carta) => {
    let num = 0;
    if(num = carta.match(/[0-9]+/)) {
        return Number(num);
    } else {
        let c = carta[0];
        num = (c == 'A') ? 11 : 10;

        return num;
    }
}

console.log(valorCarta(card));