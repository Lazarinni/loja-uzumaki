const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

let nome = document.querySelector('#name')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

/* (12) AMARZENAGEM DE DADOS*/

function dados() {

  const ds = [
    {id:0, login:"Matheus", password:"12345", email:"matheuse@gmail.com"}, //0
    {id:1, login:"Lazarini", password:"67891", email:"lazarini@gmail.com"}, //1
    {id:2, login:"Wali", password:"147258", email:"wali@gmail.cpom"}, //2
    {id:3, login:"Luiz", password:"40028922", email:"luiz@gmail.com"} //3
  ]
return ds
}

/* (12) FIM DA AMARZENAGEM */


/* (13) VALIDAÇÂO DO USUARIO */

function login() {

let login = document.querySelector("#login").value
let password = document.querySelector("#password").value

const usuarios = dados()

  for(let i = 0; i < usuarios.length; i++) { //laço for

      if (login == usuarios[i].login && password == usuarios[i].password) {
          console.log("Você logou!")
          alert('Você logou!')
      }
      else if (login != usuarios[i].login && password != usuarios[i].password) {
        console.log("Usuario ou senha incorretos")
        alert("Usuario ou senha incorretos")
      }
  }
    
}

/* (13) FIM DA VALIDAÇÃO */

/* (14) REGISTRO */

function register() {

}

register.addEventListener('keyup', () => {
  if(login.value.length <= 2){
    labelLogin.setAttribute('style', 'color: red')
    labelLogin.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validLogin = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})
