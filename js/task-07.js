const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', changeFontSize);

function changeFontSize(evt) {
  text.style.fontSize = input.value + 'px';
}
