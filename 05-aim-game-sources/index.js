const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeGame = document.querySelector('#time');
const board = document.querySelector('#board');

const colors = ['#ee7722', '#ebee20', '#2aee20', '#20eee0', '#205aee', '#b020ee', '#ee206f']

//счетчик времяни для игры
let time = 0;
//счетчик очков в игре
let score = 0;

//начало игры
function startGame() {
  setTime(time);
  createRandomCurcle();
  setInterval(decreseTime, 1000);
}

function decreseTime() {
  if(time === 0){
    finishGame();
  } else {
    let current = --time;

    if(time < 10) {
      current = `0${time}`;
    } 
    setTime(current);
    }
}

function setTime(val) {
  timeGame.innerHTML = `00:${val}`;
}

function getRandomColor(){
  return colors[Math.floor(Math.random() * colors.length)];
}

//остновка игры
function finishGame() {
  board.innerHTML = `<h1>Счет:<span class = "primary">${score}</span></h1>`;
  timeGame.parentNode.classList.add('hide');
}

//добавляем элементы в DOM 
function createRandomCurcle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const color = getRandomColor();
  const { width, height } = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.setProperty('--circleSize', `${size}px`);
  circle.style.background = `${color}`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  board.append(circle);
}

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

//слушатели событий
startBtn.addEventListener('click', (e) => {
  e.preventDefault;

  screens[0].classList.add('up');
})

timeList.addEventListener('click', (e) => {

  if(e.target.classList.contains('time-btn')) {
    time = +e.target.getAttribute('data-time');
    screens[1].classList.add('up');
    startGame();
  }
})

board.addEventListener('click', (e) => {
  if(e.target.classList.contains('circle')){
    score++;
    e.target.remove();
    createRandomCurcle();
  }
})