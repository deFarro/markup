'use strict';

// Adding interactive gallery

const picsOnMac = ['img/piconmac1.jpg', 'img/piconmac2.jpg', 'img/piconmac3.jpg'];

const $img = $('.piconmac');
const $right = $('.fa-angle-right');
const $left = $('.fa-angle-left');
const $dots = $('.slider-nav i');

updateDots(0);

$right.on('click', changePic);
$left.on('click', changePic);

function changePic(event) {
  const current = picsOnMac.indexOf($img.attr('src'));
  let next;
  if ($(event.target).hasClass('fa-angle-right')) {
    if ((current + 1) >= picsOnMac.length) {
      next = 0;
    }
    else {
      next = current + 1
    }
  }
  else if ($(event.target).hasClass('fa-angle-left')) {
    if ((current - 1) < 0) {
      next = picsOnMac.length - 1;
    }
    else {
      next = current - 1;
    }
  }
  $img.attr('src', picsOnMac[next]);
  updateDots(next);
}

function updateDots(index) {
  $dots.each(function() {$(this).removeClass('selected')});
  $dots.eq(index).addClass('selected');
}

// Fixing ancor navigation offset issue

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 75);
  }
}

$(document).on('click', 'a[href^="#"]', function(event) {
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

window.setTimeout(offsetAnchor, 0);
