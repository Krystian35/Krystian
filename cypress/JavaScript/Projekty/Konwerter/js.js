const one = document.querySelector(".one")
const two = document.querySelector(".two")
const input = document.querySelector("#converter")
const btnK = document.querySelector(".conv")
const btnR = document.querySelector(".reset")
const btnZ = document.querySelector(".change")
const result = document.querySelector(".result")

let farenheit
let celsius

// T(°F) = T(°C) x 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8

const swap = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F"
		two.textContent = "°C"
        result.textContent = ''
	} else {
        one.textContent = "°C"
		two.textContent = "°F"
        result.textContent = ''
	}
}

const changeCtoF = () => {
	farenheit = input.value * 1.8 + 32
	result.textContent = `${input.value}°C to ${farenheit.toFixed(1)}°F`
	input.value = ""
}

const changeFtoC = () => {
	celsius = (input.value - 32) / 1.8
	result.textContent = `${input.value}°F to ${celsius.toFixed(1)}°C`
	input.value = ""
}

const conversion = () => {
	if (input.value !== "") {
		if (one.textContent === "°C") {
			changeCtoF()
		} else {
			changeFtoC()
		}
	} else {
		result.textContent = "Musisz podać wartość"
	}
}

const reset = () => {
    result.textContent = ''
    input.value = ""
}

btnK.addEventListener("click", conversion)
btnR.addEventListener('click', reset)
btnZ.addEventListener("click", swap)
// btnK.addEventListener('click', changeFtoC)
// btnK.addEventListener('click', changeCtoF)
