console.log("Hola,bienvenido a The Brothers Company")

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const email2 = document.getElementById("email2")
const form = document.getElementById("form")

form.addEventListener("submit", e => {
  e.preventDefault()
  let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
  if (nombre.value === null || nombre.value === '') {
    alert("Ingrese su nombre")
  } else if (apellido.value === null || apellido.value === '') {
    alert("Ingrese su apellido")
  } else if (email.value === null || email.value === '' || !regexEmail.test(email.value)) {
    alert("Ingrese su email")
  } else if (!regexEmail.test(email2.value) || email2.value != email.value) {
    alert("Confirme su email")
  }
})
 






