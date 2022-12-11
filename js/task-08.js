const form = document.querySelector('.login-form');

form.addEventListener('submit', getData);
function getData(evt) {
  const {
    elements: { email, password },
  } = evt.currentTarget;

  evt.preventDefault();

  if (email.value === '' || password.value === '') {
    alert('Please, fill all fields of the form!');
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }
  evt.currentTarget.reset();
}
