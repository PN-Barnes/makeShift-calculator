const screen = document.getElementById('calculatorScreen');
screen.innerHTML = '';
const buttons = document.getElementById('buttons');
let result = 0;

buttons.addEventListener('click', (event) => {
  const button = event.target.innerHTML;
  screen.innerHTML += button;
  console.log(button);
});
