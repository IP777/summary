const submitBtn = document.querySelector('#submit_btn');
const nameInput = document.querySelector('#input_name');
const emailInput = document.querySelector('#input_email');
const text = document.querySelector('#textMessage');

// const userData = {
//   name: 'Its me',
//   email: 'my@email.ru',
//   message:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
// };

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  sendMail(getValue());
});

const sendMail = userMessage => {
  fetch('http://localhost:3010/mail/send/piter', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userMessage),
  }).then(response => console.log('Mail send status: ', response.status));
};

const getValue = () => {
  // if (isNaN(nameInput.value) || nameInput.value.length < 3) {
  //   console.log('Invalid name more then 3 symbol');
  // }

  // if (nameInput.email.includes('@')) {
  //   console.log('Invalid email');
  // }

  // if (isNaN(text.value) || text.value.length < 3) {
  //   console.log('Invalid text');
  // }

  return {
    name: nameInput.value,
    email: emailInput.value,
    message: text.value,
  };
};
