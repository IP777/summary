const fakeBtn = document.querySelector('#fake_btn');
const nameInput = document.querySelector('#input_name');
const emailInput = document.querySelector('#input_email');
const text = document.querySelector('#textMessage');

fakeBtn.addEventListener('click', e => {
  e.preventDefault();
  nameInput.setAttribute('value', 'Piter');
  emailInput.setAttribute('value', 'ivanov_piter@ukr.net');
  text.innerHTML = 'Hello Piter it`s I`m wery happy for you))))';
});
