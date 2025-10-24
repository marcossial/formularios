# Formulario
O projeto é uma aplicação web simples composta apenas por HTML, CSS e JavaScript puro (sem frameworks).
Seu objetivo é permitir cadastro e autenticação de usuários utilizando o LocalStorage do navegador para armazenar os dados.
Não há comunicação com servidores nem persistência real além do dispositivo local.

``````
/
├── index.html        # Página inicial de login
├── cadastro.html     # Página de cadastro de novos usuários
├── dashboard.html    # Página exibida após login bem-sucedido
├── style.css         # Estilos globais do projeto
├── script.js         # Lógica de autenticação (login)
└── cadastro.js       # Lógica de registro de usuários
``````

## 3.1 Cadastro de Usuário `(cadastro.html / cadastro.js)`

1. O usuário acessa cadastro.html.
2. Preenche nome, e-mail e senha.
3. O script:
- Verifica se já existe uma chave no localStorage com o mesmo e-mail.
- Caso exista, exibe um alert informando que o e-mail já está cadastrado.
- Caso não exista:
    - Cria um objeto com os dados:
    ```json
    { nome: "Nome", email: "email@dominio", senha: "123456" }
    ```
    - Converte o objeto em JSON e salva no localStorage com a chave igual ao e-mail.
    - Exibe mensagem de sucesso e redireciona para index.html.

## 3.2 Login de Usuário `(index.html / script.js)`
1. O usuário informa e-mail e senha.
2. O script:
- Impede o comportamento padrão do formulário `(preventDefault)`.
- Verifica se os campos estão preenchidos.
- Busca no localStorage uma chave igual ao e-mail informado.
- Caso não exista, exibe mensagem:
`"Usuário não encontrado. Faça o cadastro primeiro!"`
- Caso exista:
    - Converte o JSON salvo em objeto.
    - Compara a senha digitada com a armazenada.
    - Se coincidem:
        - Exibe mensagem `"Login realizado com sucesso!"`<span style="color: red;"> em verde.</span>
        - Redireciona para `dashboard.html` após 1 segundo.
    - Caso contrário, exibe `"Senha incorreta!"`.

## 3.3 Dashboard `(dashboard.html)`
Página estática que apenas exibe um texto:
```html
<h1>Bem-vindo usuário!</h1>
```

## 4 Armazenamento Local (LocalStorage)
- Cada usuário é salvo no formato:
```javascript 
Chave: email@exemplo.com
Valor: {"nome":"Fulano","email":"email@exemplo.com","senha":"123456"}
```
- As informações permanecem salvas no navegador mesmo após recarregar a página ou fechar o browser.

## 5 Estilo Visual `(style.css)`
- Tema escuro `(background: #121212).`
- Layout centralizado usando Flexbox.
- Elementos principais:
    - `.box-container`: contêiner com fundo escuro, bordas arredondadas e sombra leve.
    - `input`: campos com largura total, padding e bordas arredondadas.
    - `button`: cor principal ` #03dac6 `, com `hover` em ` #00bfa5 `.
    - `#mensagem`: usado para feedback visual no login (vermelho ou verde).

## 6 Execução
Modo de uso:
1. Abrir `index.html` em um navegador.
2. Clicar em “Cadastrar-se” → preencher dados.
3. Após cadastro, retornar ao login.
4. Inserir o e-mail e senha cadastrados.
5. Em caso de sucesso, será redirecionado para o dashboard.
Não é necessário servidor ou dependência externa.   