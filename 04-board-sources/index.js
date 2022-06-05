const board = document.querySelector('#board');
const colors = ['#ee7722', '#ebee20', '#2aee20', '#20eee0', '#205aee', '#b020ee', '#ee206f']
const SQUARES_NUM = 504;

for(let i = 0; i < SQUARES_NUM; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor(e) {
  const elm = e.target;
  const color = getRandomColor();
  elm.style.backgroundColor = `${color}`;
  elm.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
  const elm = e.target;
  elm.style.backgroundColor = 'azure';
  elm.style.boxShadow = `0 0 2px burlywood`
}

function getRandomColor(){
  return colors[Math.floor(Math.random() * colors.length)];
}