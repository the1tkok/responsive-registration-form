const backgroundImg = document.querySelector('.side-background-img')
const img = document.createElement('img');
img.className = 'plant-img';
img.src = 'plant-img.jpg';

const backgroundOverlay = document.querySelector('.background-overlay');
const imgOverlay = document.createElement('img');
imgOverlay.className = 'logo-img';
imgOverlay.src = 'odin-logo.png';

const logoText = document.querySelector('.logo-text');

const mediaQ = window.matchMedia("(max-width: 926px")

function removeImg() {
        if (!mediaQ.matches) {
            backgroundOverlay.insertBefore(imgOverlay, logoText);
            backgroundImg.appendChild(img);
        } else {
            backgroundImg.innerHTML = "";
        }
    }

window.addEventListener('DOMContentLoaded', removeImg, true)