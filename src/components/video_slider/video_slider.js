import Plyr from 'plyr';
import './video_slider.scss';
import '../buttons/button_arrow/button_arrow.js';

const players = [];

document.querySelectorAll('.video-slider__video').forEach(function(vid) {
  const player = new Plyr(vid, {
    controls: ['play-large']
  });

  players.push(player);
});

// Additionnal code for the slider
let pos = 0;
const slides = $('.video-slider__slide');
const numOfSlides = slides.length;

function nextSlide() {
  stopCurrentVideo();
  
  if(pos === numOfSlides - 1) {
    previousSlide();
    return;
  }

  slides.eq(pos + 1).css('z-index', '1').animate({left:'0%', opacity: '1'}, 500);
  slides.eq(pos).css('z-index', '-1').animate({left: '69%', opacity: '0.3'}, 500);
  pos++;
}

function previousSlide() {
  stopCurrentVideo();

  if(pos === 0) {
    nextSlide()
    return;
  }

  slides.eq(pos - 1).css('z-index', '1').animate({left:'0%', opacity: '1'},500);
  slides.eq(pos).css('z-index', '-1').animate({left: '69%', opacity: '0.3'}, 500);
  pos--;
}

function stopCurrentVideo() {
  players.forEach(p => p.pause());
}

document.querySelector('.btn-arrow_left-video-slider').addEventListener('click', previousSlide);
document.querySelector('.btn-arrow_right-video-slider').addEventListener('click', nextSlide);