const submitBtn = document.querySelector('#submit_btn');
const nameInput = document.querySelector('#input_name');
const emailInput = document.querySelector('#input_email');
const text = document.querySelector('#textMessage');
const alertWindow = document.querySelector('.alert');

const alertFunction = (message, status, time) => {
  console.log(alertWindow);
  if (status === 'notice') {
    alertWindow.children[2].innerHTML = 'Notice';
    alertWindow.style.backgroundColor = '#35db00';
  }
  if (status === 'warning') {
    alertWindow.children[2].innerHTML = 'Warning';
    alertWindow.style.backgroundColor = '#f44336';
  }
  alertWindow.style.display = 'block';
  alertWindow.children[2].innerHTML = message;
  setTimeout(() => {
    alertWindow.style.display = 'none';
  }, time);
};

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  //getValue();
  //console.log('next f');
  sendMail(getValue());
});

const sendMail = userMessage => {
  fetch('https://murmuring-headland-47233.herokuapp.com/mail/send/piter', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userMessage),
  }).then(response => {
    console.log('Mail send status: ', response.status);
  });
};

const getValue = () => {
  if (!(nameInput.value.length > 3)) {
    //alert('The name must be more than 3 characters');
    alertFunction('The name must be more than 3 characters', 'warning', 5000);
    throw new Error('The name must be more than 3 characters');
  }

  if (!(emailInput.value.length > 0 && emailInput.value.includes('@'))) {
    alertFunction('Ups invalid email', 'warning', 5000);
    throw new Error('Ups invalid email');
  }

  if (!(text.value.length > 10)) {
    alertFunction(
      'The message must be more than 10 characters',
      'warning',
      5000,
    );
    throw new Error('The message must be more than 10 characters');
  }

  alertFunction(
    'Thank you for feedback your letter has been sent...',
    'notice',
    5000,
  );

  return {
    name: nameInput.value,
    email: emailInput.value,
    message: text.value,
  };
};
