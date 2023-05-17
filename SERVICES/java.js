//Toggling the hamburger menu
let navBar = document.querySelector('#navigation-bar');
let menuBar = document.querySelector('#bar');

menuBar.onclick = () => {
    menuBar.classList.toggle('fa-solid.fa-bars');
    navBar.classList.toggle('show');
}

/*slide*/
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const sections = document.querySelectorAll('.slide-in');

    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();
