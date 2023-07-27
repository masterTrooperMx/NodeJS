// leer una imagen como blob
let img = document.querySelector('img');

fetch('img/superman.png')
.then(resp => resp.blob())
.then(imagen =>{
    let imgPath = URL.createObjectURL(imagen);
    //console.log(imagen, imgPath);
    img.src = imgPath;
});