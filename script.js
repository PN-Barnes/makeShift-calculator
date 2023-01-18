const screen = document.getElementById('calculatorScreen');
screen.innerHTML = '';
const buttons = document.getElementById('buttons');
let result = 0;

buttons.addEventListener('click', (event) => {
  const button = event.target.innerHTML;
  console.log(button);
  if (isNaN(button)) {
    console.log(button);
  } else {
    screen.innerHTML += button;
    console.log(button);
  }
});
