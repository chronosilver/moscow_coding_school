const slides = document.querySelectorAll('.slide')
const container = document.querySelector('.container')
const slider = document.querySelector('.slider')
const slide = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
  })

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}

function Add() {
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    container.classList.add('swiper-wrapper')
    slider.classList.add('swiper', 'mySwiper')
    slides.forEach((slide) => {
      //slide.classList.remove('active')
      slide.classList.add('swiper-slide')
      //slide.setAttribute('style', 'margin-right: 10px')
    })
  }
}
Add()
