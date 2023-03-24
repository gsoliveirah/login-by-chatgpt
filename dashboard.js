window.onload = function() {
     // Obtenha o email do localStorage
     var email = localStorage.getItem("email");

     // Verificar se o usuário está conectado
     if (!localStorage.getItem("email")) {
        // Se o email não estiver no localStorage, redirecionar para a página de login
        window.location.href = "index.html";
     }
   
     // Exiba o email na tela
     document.getElementById("email").textContent = email;
   
     // Obtenha a data e hora atuais
     var data = new Date();
     var hora = data.toLocaleTimeString();
   
     // Exiba a data e hora na tela
     document.getElementById("data").textContent = data.toDateString();
     document.getElementById("hora").textContent = hora;
   }
   