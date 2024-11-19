const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Eventos para submissão dos formulários
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", login);
const cadastroButton = document.getElementById("cadastroButton");
cadastroButton.addEventListener("click", register);



// Alterna entre login e registro
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Dados de usuários
function dados() {
    let ds = localStorage.getItem("users");
    if( ds === null){
        ds = [];
        localStorage.setItem("users", JSON.stringify(ds)); 
    }
    const storedUsers = JSON.parse(ds);
    return storedUsers;
}

// Função de login
function login() {
    const users = dados()

    let login = document.querySelector("#loginInput").value;
    let password = document.querySelector("#passwordInput").value;
    let valid = false;

    for (let i = 0; i < users.length; i++) {
        if (login == users[i].email) {
            valid = true;
            if(password == users[i].password){
                sessionStorage.setItem("user", JSON.stringify(users[i]));
                alert("Você foi logado com sucesso!")

                setTimeout(() => {
                    window.location.href = "/Uzumaki/Views/index.html";
                }, 0); // 0ms vai garantir que o código posterior seja executado antes do redirecionamento

                return;
            }
        }
    }
    if(valid){
        alert("Senha incorreta.");
    } else {
        alert("Usuário não encontrado.")
    }
}

// Exibe mensagem de boas-vindas
function showWelcomeMessage() {
    const loggedUser = JSON.parse(sessionStorage.getItem("user"));
    if (loggedUser) {
        alert(`Bem-vindo, ${loggedUser.login}!`);
    }
}

// Função de cadastro
function register() {
    const users = dados();

    let newLogin = document.querySelector("#newLogin").value;
    let newPassword = document.querySelector("#newPassword").value;
    let newEmail = document.querySelector("#newEmail").value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].login == newLogin) {
            alert("Este usuário já está cadastrado!");
            return;
        }
    }

    let newUser = {
        id: users.length,
        login: newLogin,
        password: newPassword,
        email: newEmail
    };
    try{
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        
        alert("Usuário cadastrado com sucesso!");
        sessionStorage.setItem("user", JSON.stringify(newUser));
        setTimeout(() => {
            window.location.href = "/Uzumaki/Views/index.html";
        }, 0); // 0ms vai garantir que o código posterior seja executado antes do redirecionamento
        return;
    } catch(e){
        alert(e)
        alert("foi não")
    }
}


