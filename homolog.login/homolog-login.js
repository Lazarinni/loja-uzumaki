function dados() {

  const ds = [
    {id:0, login:"Matheus", password:"12345", email:"matheuse@gmail.com"}, //0
    {id:1, login:"Lazarini", password:"67891", email:"lazarini@gmail.com"}, //1
    {id:2, login:"Wali", password:"147258", email:"wali@gmail.cpom"}, //2
    {id:3, login:"Luiz", password:"40028922", email:"luiz@gmail.com"} //3
  ]
return ds
}

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