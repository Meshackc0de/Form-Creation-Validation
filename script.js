document.addEventListener('DOMContentLoaded',()=> {
  const form = document.getElementById('#registration-form');
  const feedbackDiv = document.getElementById('#form-feedback');


  form.addEventListener('submit', (e) => {
    e.preventDefault();
  } )

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  let isValid = true;
  let messages = [];

  if(username.length < 3){
    isValid === false;
    messages.push('Short Password');
  }

  if(email.includes('@') && email.includes('.')){
    isValid === true;
  } else {
    isValid === false;
    messages.push('Include @ or .');
  }

  if(password.length < 8){
    isValid === false;
    messages.push('Password is not long enough')
  }

  feedbackDiv.style.display = 'block';
  if(isValid === true){
    feedbackDiv.textContent = 'Registration successful!';
    feedbackDiv.style.color = '#28a745';
  } else {
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = '#dc3545';

  }
});