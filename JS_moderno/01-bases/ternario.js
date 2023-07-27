let input = '';
const arr = [1, 2, 4, 6, 8, 4, 55];

function cacheInput(data) {
    input += data; 
}

function prepareInput() {
    input = input.split(/\s+/).map(Number); // pasamos a un arrgeglo de numeros
}

function main() {
    prepareInput();
    const T = input.splice(0, 1)[0];
    console.log('el numero ', arr.includes(T));
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);