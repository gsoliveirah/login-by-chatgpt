function findUserByEmail(email) {
     
     // Carrega o arquivo JSON de usuários
     fetch('users.json')
       .then(response => response.json())
       .then(data => {
         // Encontra o usuário com o e-mail especificado
         const user = data.users.find(user => user.email === email);
         if (user) {
           // Recupera o nome e o endereço IP do usuário
           const name = user.name;
           const ip = user.ip;
           console.log(`Nome: ${name}, IP: ${ip}`);
         } else {
           console.log("Usuário não encontrado");
         }
       })
       .catch(error => console.error(error));
   }
   
   // Exemplo de uso
   findUserByEmail('user1@example.com');
   