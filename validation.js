const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const password = document.querySelector("#password")
const passwordHelp = document.querySelector("#passwordHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (email.value === "" || password.value === "") {
		if (email.value === "") {
			emailHelp.innerText = "Por favor, complete con su email"
		}
		else (password.value === "") 
		{
			passwordHelp.innerText = "Por favor, complete con su contraseña"
		}
	} else {
			form.submit()
			}
})