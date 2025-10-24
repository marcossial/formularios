const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita o recarregamento da página

  mensagem.textContent = ""; // limpa mensagens anteriores
  mensagem.style.color = "red";

  if (usuario.value === "" || senha.value === "") {
    mensagem.textContent = "Preencha todos os campos!";
    return;
  }

  // Pega o usuário salvo no localStorage
  const dadosSalvos = localStorage.getItem(usuario.value);

  if (!dadosSalvos) {
    mensagem.textContent = "Usuário não encontrado. Faça o cadastro primeiro!";
    return;
  }

  // Converte o JSON de volta em objeto
  const usuarioObj = JSON.parse(dadosSalvos);

  // Verifica a senha
  if (usuarioObj.senha === senha.value) {
    mensagem.style.color = "#03dac6";
    mensagem.textContent = "Login realizado com sucesso!";

    // Redireciona após 1 segundo
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    mensagem.textContent = "Senha incorreta!";
  }
});
