const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')


const dragStart = (e) => {
  e.target.classList.add('hold');
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

const dragEnd = (e) => {
  e.target.classList.remove('hold', 'hide');
};

const dragOver = (e) => {
  e.preventDefault();
};

const dragEnter = (e) => {
  e.target.classList.add('hovered');
};

const dragLeave = (e) => {
  e.target.classList.remove('hovered');
};

const dragDrop = (e) => {
  e.target.append(item);
  e.target.classList.remove('hovered');

  placeholderId = e.target.id;

  item.className = 'item';

  if (placeholderId == 'done'){
    item.classList.add('finished');
    console.log(item);
  } else if (placeholderId == 'in-process') {
    item.classList.add('processing');
  } 
};

// слушатели событий
for(const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', dragDrop);
}

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);
