//Toggling the hamburger menu
let navBar = document.querySelector('#navigation-bar');
let menuBar = document.querySelector('#bar');

menuBar.onclick = () => {
    menuBar.classList.toggle('fa-solid.fa-bars');
    navBar.classList.toggle('show');
}

//Slider for the brands section
const container = document.querySelector(".brands_main");
const slides = document.querySelector(".brands_slides");

// Keep track of user's mouse down and up
let isPressedDown = false;
// X horizontal space of cursor from inner container
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - slides.offsetLeft;
    container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
    container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
    isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    slides.style.left = `${e.offsetX - cursorXSpace}px`;
    boundSlides();
});

function boundSlides() {
    const containerRect = container.getBoundingClientRect();
    const slidesRect = slides.getBoundingClientRect();

    if (parseInt(slides.style.left) > 0) {
        slides.style.left = 0;
    } else if (slidesRect.right < containerRect.right) {
        slides.style.left = `-${slidesRect.width - containerRect.width}px`;
    }
}

// Arrows

const arrowLeft = document.querySelector(".brands_arrow-left");
const arrowRight = document.querySelector(".brands_arrow-right");

arrowLeft.addEventListener("click", slideLeft);
arrowRight.addEventListener("click", slideRight);

function slideLeft() {
    slides.style.left = `${parseInt(slides.style.left) + 210}px`;
    boundSlides();
}

function slideRight() {
    slides.style.left = `${parseInt(slides.style.left) - 210}px`;
    boundSlides();
}
