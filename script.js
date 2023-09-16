const loadImageLink = document.getElementById("loadImage");
const imageContainer = document.getElementById("imageContainer");
const image = document.getElementById("image");

loadImageLink.addEventListener("click", function (event) {
    event.preventDefault();

    image.src = "https://lh3.googleusercontent.com/a/ACg8ocKqgoz_QHd8eo5k04s6IZcOwc7OZNTCGgLyKMu9jk8pupI=s432-c-no"; 
    imageContainer.style.display = "block";

    loadImageLink.style.display = "none";
});
