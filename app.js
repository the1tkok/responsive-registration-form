const backgroundImg = document.querySelector('.side-background-img')
const img = document.createElement('div');
img.className = 'plant-img';
img.style.minWidth = '100%';
img.style.minHeight = '100%';
img.style.objectFit = 'cover';
img.style.content = 'url(plant-img.jpg)';

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