console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

document.addEventListener("DOMContentLoaded", function () {
    loadImages();


});

function loadImages() {
    fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
       results.message.forEach(image => newImage(image))
});
}
function newImage() {
    
}