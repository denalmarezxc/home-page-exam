let currentIndex = 0;

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

const showCarouselItem = (index) => {
  const offset = -index * 100;
  document.querySelector('.carousel-items').style.transform = `translateX(${offset}%)`;
};

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  showCarouselItem(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showCarouselItem(currentIndex);
});
