const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', addName);
function addName() {
  if (input.value === '') {
    output.textContent = 'Anonimous';
  } else {
    output.textContent = input.value;
  }
}
