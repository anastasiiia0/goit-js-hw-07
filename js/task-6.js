function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createCollection() {
  const textInput = document.querySelector('input');
  const createBtn = document.querySelector('button[data-create]');
  const destroyBtn = document.querySelector('button[data-destroy]');

  createBtn.addEventListener('click', () => {
    const amount = parseInt(textInput.value);
    if (amount < 1 || amount > 100)
      alert('Please enter a number between 1 and 100.');

    createBoxes(amount);
    textInput.value = '';
  });

  destroyBtn.addEventListener('click', destroyBoxes);
}

function createBoxes(amount) {
  destroyBoxes();
  const boxesContainer = document.querySelector('div#boxes');

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);

    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('div#boxes');
  boxesContainer.innerHTML = '';
}

createCollection();
