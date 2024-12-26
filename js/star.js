const shootingStar = document.querySelector('.shooting-star');

function randomizePosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    shootingStar.style.top = `${y}px`;
    shootingStar.style.left = `${x}px`;
}

// Update position before every animation
shootingStar.addEventListener('animationiteration', randomizePosition);

// Set initial position
randomizePosition();
