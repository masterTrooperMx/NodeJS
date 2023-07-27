var myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Hola');
  }, 3000);
});

myPromise.then(function(value) {
  console.log(value);
});

console.log(myPromise);