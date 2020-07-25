const burgerMenu = document.querySelector('.burger-menu');
const slide = document.querySelector('.slide-show');
const crossSlide = document.querySelector('.cross');
const slideList = document.querySelectorAll('.nav-links-slide li');

burgerMenu.addEventListener('click', () => {
  slide.classList.add('show-slide');
  crossSlide.addEventListener('click', () => {
    slide.classList.remove('show-slide');
  });
});

slideList.forEach((li) => {
  li.addEventListener('click', () => {
    slide.classList.remove('show-slide');
  });
});
