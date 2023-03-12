const pass = document.querySelector("#password")
const p = document.querySelector(".passinfo")
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 9

const checkInput = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = "Very Good Password"
		p.style.color = "pink"
	} else if (pass.value.length > minValue && pass.value.match(numbers)) {
		p.textContent = "Good Password"
		p.style.color = "blue"
	} else if (pass.value.length > minValue && pass.value.match(letters)) {
		p.textContent = "Weak Password"
		p.style.color = "orange"
	}
	
}

const enterPassword = () => {
	let def = (pass.value.length - minValue) * -1
	if (pass.value != "" && pass.value.length >= minValue) {
		checkInput()
	} else {
		p.textContent = `your password is ${def}`
		p.style.color = "red"
	}
	
	
}

pass.addEventListener("keyup", enterPassword)
