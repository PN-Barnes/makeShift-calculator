let screen = document.getElementById('calculatorScreen');
screen.innerHTML = '';
const buttons = document.getElementById('buttons');
const allClear = document.getElementById('allClear');
let operator = null;
let operatorArr = ['+', '-', '*', '/'];
let numbers = [];

let result = 0;

allClear.addEventListener('click', (event) => {
  while (numbers.length > 0) {
    numbers.pop();
  }
  screen.innerHTML = '';
  operator = null;
});
buttons.addEventListener('click', (event) => {
  const button = event.target.innerHTML;
  if (button !== '=') {
    if (isNaN(button)) {
      operatorEvent(button);
    } else {
      numberEvent(button);
    }
  } else {
    if (numbers.length === 2) {
      screen.innerHTML = numbers[0] + operator + numbers[1];
    } else {
      screen.innerHTML = numbers[0];
    }
  }
});

const numberEvent = (button) => {
  console.log(button);
  screen.innerHTML += button;
};
const operatorEvent = (button) => {
  numbers.push(screen.innerHTML);
  console.log(numbers);
  operator = button;
  screen.innerHTML = '';
};
