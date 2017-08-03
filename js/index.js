'use strict';

const picsOnMac = ['file:///Users/Jack/Documents/Coding/Projects/Markup/Case1/img/piconmac1.jpg', 'file:///Users/Jack/Documents/Coding/Projects/Markup/Case1/img/piconmac2.jpg', 'file:///Users/Jack/Documents/Coding/Projects/Markup/Case1/img/piconmac3.jpg'];

const img = document.querySelector('.piconmac');
const right = document.querySelector('.fa-angle-right');
const left = document.querySelector('.fa-angle-left');
const dots = Array.from(document.querySelectorAll('.slider-nav i'));

updateDots(0);

right.addEventListener('click', changePic);
left.addEventListener('click', changePic);

function changePic(event) {
  const current = picsOnMac.indexOf(img.src);
  let next;
  if (event.target.classList.contains('fa-angle-right')) {
    if ((current + 1) >= picsOnMac.length) {
      next = 0;
    }
    else {
      next = current + 1
    }
  }
  if (event.target.classList.contains('fa-angle-left')) {
    if ((current - 1) < 0) {
      next = picsOnMac.length - 1;
    }
    else {
      next = current - 1;
    }
  }
  img.src = picsOnMac[next];
  updateDots(next);
}

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('selected'));
  dots[index].classList.add('selected');
}
