const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function() {
    const res = await fetch("https://picsum.photos/v2/list?limit=100"); //the api url gives a limit of 100 images
    const images = await res.json();
    //console.log(images);
    selectRandomImage(images);
};


const selectRandomImage = function(images) {
    const randomIndex = Math.floor(Math.random() * images.length); //gets a random image number between 0 and 99
    const randomImage = images[randomIndex]; //gets the random image data formatted as an object
    //console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function(randomImage) {
    const author = randomImage["author"];
    const imageUrl = randomImage["download_url"];
    authorSpan.innerText = `${author}`;
    img.src = imageUrl;
    imgDiv.classList.remove("hide");
};


button.addEventListener("click", function() {
    getImage();
});
