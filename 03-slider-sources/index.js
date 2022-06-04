const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slidesCount = mainSlide.querySelectorAll('div').length;

sidebar.style.top = `-${(slidesCount -1) * 100}vh`;

//переменная счетчик слайдов
let activeSlideIndex = 0

//функция смены направления слайдов
function changeSlide(direction) {
  if(direction === 'up') {
    activeSlideIndex++;
    if(activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  }
  if(direction === 'down') {
    activeSlideIndex--;
    if(activeSlideIndex <0) {
      activeSlideIndex = slidesCount -1;
    }
  }

  //получаем высоту контейнера
  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}


// слушатели событий на кнопках
upBtn.addEventListener('click', () => {
  changeSlide('up');
});

downBtn.addEventListener('click', () => {
  changeSlide('down');
});

document.addEventListener('keydown', (e) => {
  console.log(e.key);
  if(e.key === 'ArrowDown'){
    changeSlide('down');
  } else if (e.key === 'ArrowUp'){
    changeSlide('up');
  }
})
