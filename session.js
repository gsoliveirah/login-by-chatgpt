const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const lembrarCheckbox = document.getElementById('lembrar');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("Entrei no modo enviar");
  
  const email = emailInput.value;
  const senha = senhaInput.value;

  // Verifica se o usuário deseja lembrar a senha
  if (lembrarCheckbox.checked) {
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
  } else {
    localStorage.removeItem('email');
    localStorage.removeItem('senha');
  }

  console.log("Seu e-mail é :" + localStorage.getItem('email'));
  // Redirecionar para a página dashboard.html após o login
  window.location.href = "dashboard.html";

});

// Verifica se o usuário já está logado
const emailSalvo = localStorage.getItem('email');
const senhaSalva = localStorage.getItem('senha');

if (emailSalvo && senhaSalva) {
  emailInput.value = emailSalvo;
  senhaInput.value = senhaSalva;
  lembrarCheckbox.checked = true;
}
