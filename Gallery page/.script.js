//image popup
document.querySelectorAll('.image-gallery1 img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
}

//Toggling the hamburger menu
let navBar = document.querySelector('#navigation-bar');
let menuBar = document.querySelector('#bar');

menuBar.onclick = () => {
    menuBar.classList.toggle('fa-solid.fa-bars');
    navBar.classList.toggle('show');
}
//image slider
var imgIndex = 1;
displayImg(imgIndex);

function btn_img(n) {
    displayImg(imgIndex = n);
}
function next_image(n) {
    displayImg(imgIndex += n);
}
let imgInterval = setInterval(() => {
    next_image(1);
}, 5000);
let slideContainer = document.getElementsByClassName('slideshow-container')[0];
slideContainer.addEventListener('mouseenter', () => {
    clearInterval(imgInterval);
});
slideContainer.addEventListener('mouseleave', () => {
    imgInterval = setInterval(() => {
        next_image(1);
    }, 5000);
});
function displayImg(n) {
    var j;
    var images = document.querySelectorAll('.images');
    var img_slider = document.querySelectorAll('.btn span');

    if (n > images.length) { imgIndex = 1 }
    if (n < 1) {
        imgIndex = images.length
    }
    for (j = 0; j < images.length; j++) {
        images[j].style.display = "none";
    }
    for (j = 0; j < img_slider.length; j++) {
        img_slider[j].style.background = "rgba(128, 128, 128, 0.2)";
    }
    images[imgIndex - 1].style.display = "block";
    img_slider[imgIndex - 1].style.background = "white";
}



