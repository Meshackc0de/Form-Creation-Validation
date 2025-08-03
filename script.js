document.addEventListener('DOMContentLoaded',()=> {
  const form = document.getElementById('#registration-form');
  const feedbackDiv = document.getElementById('#form-feedback');


  form.addEventListener('submit', (e) => {
    e.preventDefault();
  } )

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  

  
});