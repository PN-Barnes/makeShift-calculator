const screen = document.getElementById('calculatorScreen');
screen.innerHTML = '';
const buttons = document.getElementById('buttons');
const allClear = document.getElementById('allClear');
let result = 0;

buttons.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target.innerHTML;
    console.log(button);
    if (isNaN(button)) {
      console.log(button);
    } else {
      screen.innerHTML += button;
      console.log(button);
    }
  } else {
    return;
  }
});

allClear.addEventListener('click', (e) => {
  const screen = e.target.innerHTML;
  screen.innerHTML = '';
});
