const button = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const codeColor = document.querySelector('.color');
button.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const newColor =
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0);
  bodyColor.style.backgroundColor = newColor;
  codeColor.textContent = newColor;
}
