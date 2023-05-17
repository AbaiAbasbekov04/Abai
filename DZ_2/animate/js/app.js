const container = document.querySelector('.container');
const bigCircle = document.querySelector('.big-circle');
const smallCircle = document.querySelector('.small-circle');

const radius = (bigCircle.offsetWidth / 2) - (smallCircle.offsetWidth / 2);
const centerX = bigCircle.offsetWidth / 2;
const centerY = bigCircle.offsetHeight / 2;
let angle = 0;
let speed = 0.03;

function animateSmallCircle() {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    smallCircle.style.top = y + 'px';
    smallCircle.style.left = x + 'px';

    angle += speed;

    setTimeout(animateSmallCircle, 10);
}

animateSmallCircle();