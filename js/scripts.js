const images = ["img/project 09 peeling sky.jpg", "img/project 06 text interaction 1.jpg", "img/Anaglyph project.jpg","img/Class Project 12 Boat in a bottle.jpg"]
let currentImageNum = 0;
const currentImage = document.getElementById("current-image");

function HandleRightClick() {
  if (currentImageNum >= images.length - 1){
    currentImageNum = 0
  } else {
    currentImageNum++
  };
  currentImage.src = images[currentImageNum];
};

function HandleLeftClick() {
  if (currentImageNum <= 0){
    currentImageNum = images.length - 1
  } else {
    currentImageNum--
  };
  currentImage.src = images[currentImageNum];
};