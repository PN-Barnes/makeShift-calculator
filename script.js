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
    if (isNaN(button) && button !== '.') {
      operatorEvent(button);
    } else {
      numberEvent(button);
    }
  } else {
    if (numbers.length < 2) {
      numbers.push(screen.innerHTML);
      return calculation(numbers, operator);
    } else {
      screen.innerHTML = numbers[0];
    }
  }
});

const calculation = (numbers, operator) => {
  switch (operator) {
    case '+':
      screen.innerHTML = numbers[0] + numbers[1];
      break;
    case '-':
      screen.innerHTML = numbers[0] - numbers[1];
      break;
    case '*':
      screen.innerHTML = numbers[0] * numbers[1];
      break;
    case '/':
      screen.innerHTML = numbers[0] / numbers[1];
      break;
    default:
      break;
  }
};

const numberEvent = (button) => {
  screen.innerHTML += button;
};
const operatorEvent = (button) => {
  if (checkButton(operatorArr, button)) {
    numbers.push(screen.innerHTML);
    operator = button;
    screen.innerHTML = '';
  } else {
    return;
  }
};

const checkButton = (checkArr, clicked) => {
  return checkArr.includes(clicked);
};
