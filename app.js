const swiper = new Swiper('.slider', {
  direction: 'vertical',
  speed: 2000,
  // grabCursor: true,
  mousewheel: true,
  spaceBetween: 18,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

const menuLinks = document.querySelectorAll('.menu-nav a')

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function (e) {
    e.preventDefault()
    if (this.classList.contains('active')) {
      return
    }
    for (let j = 0; j < menuLinks.length; j++) {
      menuLinks[j].classList.remove('active')
    }
    this.classList.add('active')
    const slideId = this.getAttribute('href')
    swiper.slideTo(document.querySelector(slideId).dataset.swiperSlideIndex)
  })
}
