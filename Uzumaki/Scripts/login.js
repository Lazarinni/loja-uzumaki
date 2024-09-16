const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Alterna entre login e registro
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Dados de usuários
function dados() {
    const ds = [
        {id: 0, login: "Matheus", password: "12345", email: "matheuse@gmail.com"},
        {id: 1, login: "Lazarini", password: "67891", email: "lazarini@gmail.com"},
        {id: 2, login: "Wali", password: "147258", email: "wali@gmail.com"},
        {id: 3, login: "Luiz", password: "40028922", email: "luiz@gmail.com"}
    ];

    const storedUsers = localStorage.getItem("usuarios");
    return storedUsers ? JSON.parse(storedUsers) : ds;
}

// Função de login
function login(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    let login = document.querySelector("#loginInput").value;
    let password = document.querySelector("#passwordInput").value;

    const usuarios = dados();

    for (let i = 0; i < usuarios.length; i++) {
        if (login == usuarios[i].email && password == usuarios[i].password) {
            localStorage.setItem("loggedUser", JSON.stringify(usuarios[i]));
            alert("Você logou!");
            window.location.href = `/Uzumaki/Views/index.html?login=success&username=${usuarios[i].login}`;
            showWelcomeMessage();
            return;
        }
    }
    alert("Usuário ou senha incorretos");
}

// Exibe mensagem de boas-vindas
function showWelcomeMessage() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) {
        alert(`Bem-vindo, ${loggedUser.login}!`);
    }
}

// Função de cadastro
function register(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    let newLogin = document.querySelector("#newLogin").value;
    let newPassword = document.querySelector("#newPassword").value;
    let newEmail = document.querySelector("#newEmail").value;

    let usuarios = dados();

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].login == newLogin) {
            alert("Este usuário já está cadastrado!");
            return;
        }
    }

    let newUser = {
        id: usuarios.length,
        login: newLogin,
        password: newPassword,
        email: newEmail
    };

    usuarios.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!");
}

// Eventos para submissão dos formulários
document.getElementById("loginForm").addEventListener("submit", login);
document.getElementById("registerForm").addEventListener("submit", register);
