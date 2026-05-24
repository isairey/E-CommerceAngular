var image = document.getElementById("image");
var currentPos = 0;
var images = ["../../assets/img/offremsi.jpg","../../assets/img/offre.jpg","../../assets/img/offrerampage.png"];

function volgendefoto() {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];
}

setInterval(volgendefoto, 3000);