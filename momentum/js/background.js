const images = [
    "js1.jpeg",
    "js2.jpeg",
    "js3.jpeg",      
]

const daysImage = images[Math.floor(Math.random() *images.length)];


const bgImage =document.createElement("img");

bgImage.src = `img/${daysImage}`;
document.body.appendChild(bgImage); 
