const elements = document.querySelectorAll('.animate-on-scroll');

function checkScroll() {
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight) {
      element.style.opacity = 1;
    } else {
      element.style.opacity = 0;
    }
  });
}

window.addEventListener('scroll', checkScroll);