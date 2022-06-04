const board = document.querySelector('#board');
const colors = ['#ee7722', '#ebee20', '#2aee20', '#20eee0', '#205aee', '#b020ee', '#ee206f']
const SQUARES_NUM = 504;

for(let i = 0; i < SQUARES_NUM; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square);
}

function setColor(elm) {
  const color = getRandomColor();
  elm.style.backgroundColor = `${color}`;
  elm.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elm) {
  elm.style.backgroundColor = 'azure';
  elm.style.boxShadow = `0 0 2px burlywood`
}

function getRandomColor(){
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}