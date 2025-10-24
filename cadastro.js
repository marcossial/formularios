document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
  
    // Verifica se o email já está cadastrado
    if (localStorage.getItem(email)) {
      alert("Este e-mail já está cadastrado!");
      return;
    }
  
    // Cria um objeto com os dados do usuário
    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    };
  
    // Armazena no localStorage (converte para JSON)
    localStorage.setItem(email, JSON.stringify(usuario));
  
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html"; // Redireciona para o login
  });
  