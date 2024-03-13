function greeting() {
  const textInput = document.querySelector('input#name-input');
  const output = document.querySelector('span#name-output');

  textInput.addEventListener('input', event => {
    const name = event.currentTarget.value.trim();

    if (name === '') output.textContent = 'Anonymous';
    else output.textContent = name;
  });
}

greeting();
