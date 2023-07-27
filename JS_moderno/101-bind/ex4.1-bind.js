let literals = [
    { 
        days: 2,
        toDay: new Date(),
        milesTraveled: 11000,
    }
]

literals[-1] = {
    days: 5,
    toDay: new Date() - 2,
    milesTraveled: 12000,
};

literals[1] = {
    days: 23,
    toDay: new Date() - 1,
    milesTraveled: 234000,
}

// function
//function f() {
//    return this.milesTraveled
//}

//console.log(literals);
literals.forEach(element => {
    console.log(element);
    // la funcion de flecha no tiene this, usa el this contextual, lexical this
    const g = () => { return this.milesTraveled; }
    const h = g.bind(element)
    console.log("miles Traveled:", h());
});