let screen = document.getElementById('calculatorScreen');
screen.innerHTML = '';
const buttons = document.getElementById('buttons');
const allClear = document.getElementById('allClear');
let operator = null;
let numbers = [];

let result = 0;

allClear.addEventListener('click', (event) => {
  console.log(event.target.innerHTML);
  screen.innerHTML = '';
  operator = null;
});
buttons.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.innerHTML !== '=') {
    const button = event.target.innerHTML;
    if (isNaN(button) && button !== '=') {
      numbers.push(screen.innerHTML);
      operator = button;
      screen.innerHTML = '';
      console.log(operator);
      console.log(numbers);
    } else {
      screen.innerHTML += button;
      console.log(button);
    }
  } else {
    return;
  }
});
